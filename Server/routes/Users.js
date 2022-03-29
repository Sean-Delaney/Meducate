const express = require('express');
const userModel = require('../Models/userModel');
const router = express.Router();
var usermodel = require('../Models/userModel');

//Route for GET requests
router.get('/', (req, res) => {
  usermodel.find({  }, (err, data) => {
    if(err){
      console.log(err);
    }
      res.redirect('http:localhost:3000/home');
      res.send("Data succesfully fetched");
      res.end();
  })
})

//Route for POST requests
router.post('/', async (req, res) => {
  var user = req.body;
  await usermodel.insertMany((user), (err, data) => {
    if(err){
      console.log(err);
    }
  });
  res.send("User " + user.username + " inserted. Thank you..")
  res.end();
})

module.exports = router;