const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const { promisify } = require('util');

const signToken = id => { 
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createSendToken = (user, statusCode, res) => {

    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    // if (process.env.NODE_ENV === 'production')
    //     cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
};

exports.makeAccount = catchAsync(async (req, res) => {

      const user = await User.create(req.body);
  
      createSendToken(user, 200, res);
  });

exports.loginExisting = async (req, res) => {
    try {
        const { username: usernameBody } = req.body;
        const { password: passwordBody } = req.body;
        const user = await User.findOne({
            username: usernameBody,
            password: passwordBody,
        });
        if (!user) {
            return res.status(404).json(`wrong username or password`);
        }
        createSendToken(user, 200, res);
    } catch (error) {
        console.log(error);
        res.status(500).json(`error`);
    }
};

exports.protect = catchAsync(async (req,res, next) => {
    let token; 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token)
    {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    // console.log(decoded);
    const currentUser = await User.findById(decoded.id);   
    if(!currentUser){
        return next(new AppError('The user no longer exists',401));
    }

    if(currentUser.changedPasswordAfter(decoded.iat)){
        return next(new AppError('Password was recently changed. Please login again',401));
    }
    req.user = currentUser;
    next();
});
