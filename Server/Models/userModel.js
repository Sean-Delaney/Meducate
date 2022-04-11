const mongoose = require('mongoose');

//Schema for users collection in the database
const usrSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
}, {timestamps: true});

//Model for database to be exported
module.exports = mongoose.model('User', usrSchema);