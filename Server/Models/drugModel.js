const mongoose = require('mongoose');

//Schema for drugs collection
const drugsSchema = new mongoose.Schema({
  name: {type: String, default: 'Not available'},
  chemical_formula: {type: String, default: 'Not available'},
  half_life: {type: String, default: 'Not available'},
  mental_effects: {type: [[String]], default: 'Not available'},
  physical_effects: {type: [[String]], default: 'Not available'},
  testing: {type: String, default: 'Not available'},
  synonyms: {type: [[String]], default: 'Not available'}
})

module.exports = mongoose.model('Drugs', drugsSchema);