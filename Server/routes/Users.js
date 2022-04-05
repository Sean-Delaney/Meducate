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
      console.log("New sign-in attempt from", req.query.username);
      res.send(data);
      res.end();
  })
})

//Route for POST requests
router.post('/', async (req, res) => {
  //Get the username
  query = {
    username : req.body.username
  }
  //Check if the uer already exists
  usermodel.find(query, async (err, data)=>{
    //Handle any errors
    if(err){
      console.log(err);
    }
    //If the details already exist
    if(data.length > 0){
      res.send('User already exists')
      res.end();
    }
    //If not, enter the user
    else{
      var user = req.body;
      await usermodel.insertMany((user), (err) => {
        if(err){
        console.log(err);
        }else{
          //Show the console the new user has been inserted.
          console.log('user ' + req.body.username + ' inserted')
        }
      });
      res.send('success');
      res.end();
    }
  })
})

module.exports = router;