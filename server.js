const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');


const connectDB = (url) => {
    return mongoose.connect(url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }); // returning a promise
  };

const port = 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(
        `connected to the db and server listining to port ${port}...`
      );
    });
  } catch (error) { 
    console.log(error);
  }
};
start(); 