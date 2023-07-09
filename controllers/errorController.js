const AppError = require("../utils/appError");

const sendError = (err, res) => {
    res.status(err.statusCode).json({
      status : err.status,
      error : err,
      message : err.message,
      stack : err.stack
    });
  };

  const handleCastErrorDB = err => {
    const message = `Invalid ${err.path} : ${err.value}`;
    return new AppError(message, 400);
  }
  const handleDuplicateFieldDB = err => {
    const message = `Duplicate field value : ${err.keyValue.name}. Please use another value.`;
    return new AppError(message, 400);
  }
  const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
  }
  const handleJWTError = () => {
    return new AppError('Invalid token. Please login again.', 401);
  }
  const handleJWTExpiredError = () => {
    return new AppError('Token expired. Please login again.', 401);
  }



  module.exports = ((err, req, res, next) => {
    //500 - internal server error
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    // if(process.env.NODE_ENV === 'development'){
      sendError(err, res);

    // }else{
      // let error = {...err};
      // if(err.name === 'CastError'){
      //   error = handleCastErrorDB(error);
      // }
      // if(err.code === 11000){
      //   error = handleDuplicateFieldDB(error);
      // }
      // if(err.name === 'ValidationError'){
      //   error = handleValidationErrorDB(error);
      // }
      // if(err.name === 'JsonWebTokenError'){
      //   error = handleJWTError();
      // }
      // if(err.name === 'TokenExpiredError'){
      //   error = handleJWTExpiredError();
      // }
      // sendError(error, res);
    // }

    next();
  });