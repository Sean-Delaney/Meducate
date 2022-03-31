const express = require('express');
const router = express.Router();
var usermodel = require('../Models/userModel');

//Route for GET requests
router.get('/', (req, res) => {
  usermodel.find(req.query, (err, data) => {
    if(err){
      console.log(err);
    } 
      //Show new sign in requests in the terminal
      console.log("New sign-in from", req.query.username);
      res.send(data);
      res.end();
  })
})

//Route for POST requests
router.post('/', async (req, res) => {
  var user = req.body;
  await usermodel.insertMany((user), (err) => {
    if(err){
      console.log(err);
    }
  });
  res.send('success')
  res.end();
})

module.exports = router;