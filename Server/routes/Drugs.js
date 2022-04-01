const express = require ('express');
const router = express.Router();
var drugModel = require('../Models/drugModel');

router.get('/', (req, res) => {
  drugModel.find(req.query, (err, data) => {
    if(err){
      console.log(err);
    }
    console.log('Drugs retrieved');
    res.send(data);
    res.end();
  })
})

router.post('/', async(req, res) => {
  var drug = req.body;
  await drugModel.insertMany((drug), (err) => {
    if(err){
      console.log(err);
    }
  });
  res.send('Successfully updates drugs database');
  res.end();
})

module.exports = router;