const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.home = (req, res) => {
  res.status(200).send("home page");
};

exports.contact = (req, res) => {
  res.status(200).send("contact page");
};

exports.about = (req, res) => {
  res.status(200).send("about page");
};

exports.login = (req, res) => {
  res.status(200).send("login page");
};

exports.signup = (req, res) => {
  res.status(200).send("signup page");
};

exports.deleteUser = catchAsync(async (req, res, next) => {

  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.getDetails = catchAsync(async (req, res, next) => {
  const { id: userID } = req.params;
  const id = userID;
  const user = await User.findOne({
    _id: id,
  });
  if (!user) {
    return next(new AppError('wrong credentials', 404));
  }
  // console.log(user);
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.updateDetails = catchAsync(async (req, res) => { 
    const { id: userID } = req.params;
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) { 
    return next(new AppError('wrong credentials', 404));
      
    }
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
});