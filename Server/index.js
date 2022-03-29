const express = require('express');
const app = express();
const mongoose = require('mongoose')
const parser = require('body-parser');
require('dotenv').config({path:'../.env'});

//User parser to parse the request body
app.use(parser.json())

//Connect to the database and then start server
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//Get the connection
const db = mongoose.connection;

//Show database status
db.once('open', ()=>{
  console.log('Database connection successful...');
});

//Start the server
app.listen(3001, ()=>{
  console.log('Server now listening on port 3001');
})

//Routers
const userRouter = require('./routes/Users.js');
app.use('/users', userRouter);