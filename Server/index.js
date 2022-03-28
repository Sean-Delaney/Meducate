const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});

//Schema for users collection in the database
const usrSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  securityAnswer: {
    type: String,
    required: true
  },
  videosWatched: [String],
  awards: [String]
})

//Model for database
const User = mongoose.model('User', usrSchema);


//Connect to the database and then start server
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(
  app.listen(3001, () => {
    console.log('Server now listening on port 3001');
  })
);