const express = require('express');
const app = express();
const mongoose = require('mongoose')
const parser = require('body-parser');
require('dotenv').config({path:'../.env'});
const cors = require('cors');

//User parser to parse the request body
app.use(parser.json())
//Use cors to allow cross origin communication
app.use(cors());

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
//Route for getting / creating users
const userRouter = require('./routes/Users.js'); 
app.use('/users', userRouter);

//Route for getting drugs
const drugRouter = require('./routes/Drugs.js');
app.use('/drugs', drugRouter);