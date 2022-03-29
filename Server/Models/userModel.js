const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Schema for users collection in the database
const usrSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  loggedIn:{type: Boolean, default: false},
  videosWatched: String,
  awards: String
});

//Model for database to be exported
module.exports = mongoose.model('User', usrSchema);