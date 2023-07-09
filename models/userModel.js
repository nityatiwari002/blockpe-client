const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
//to generate the random token string
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "a username is required"],
        trim: false,
        maxlength: [30, "name should be less than 30 characters"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: false,
        lowercase: true,
        validate: [validator.isEmail, 'Incorrect email format']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxlength: [10, "number should contain 10 digits"],
        minlength: [10, "number should contain 10 digits"],
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator:
                function (el) {
                    return el === this.password;
                },

            message: 'Passwords are not the same'
        }
    },
    passwordChangedAt : Date,
    passwordResetToken : String,
    passwordResetExpires : Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});


userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12); 
    this.passwordConfirm = undefined;

    next();
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
  
    next();
  });

//query middleware
userSchema.pre(/^find/, function (next) {
    this.find({ active: { $ne: false } });
    next();
});

//an instance method
userSchema.methods.correctPassword = async function(candidatePassword, userPassword)
{
  return await bcrypt.compare(candidatePassword, userPassword);
}

//jwt timestamp when the token was issued
userSchema.methods.changedPasswordAfter = function(JWTTimestamp){

    if(this.passwordChangedAt)
    {
        const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000, 10); 
        return JWTTimestamp < changedTimestamp; 
    }
    return false; //user has not changed the password since the token was issued
}


userSchema.methods.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex'); 
  
    //10 mins = 10 *60 secs = 10 * 60 * 1000 milliseconds
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
}
  

module.exports = mongoose.model("Users", userSchema);
