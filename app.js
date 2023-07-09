const express = require('express');
const app = express();
const mongoSanitize = require('express-mongo-sanitize');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');


app.use(express.json({
    limit : '10kb' 
  }));

app.use(mongoSanitize());

app.use('/api/v1', userRouter); 

//HANDLING UNHANDLED ROUTES
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
  });
 
app.use(globalErrorHandler);
module.exports = app;

  

