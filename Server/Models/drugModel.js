const mongoose = require('mongoose');

//Schema for drugs collection
const drugsSchema = new mongoose.Schema({
  name: String,
  chemical_formula: {
    type: String,
    default: 'None provided'
  },
  half_life: String,
  mental_effects: [[String]],
  physical_effects: [[String]],
  testing: String,
  synonyms: [[String]]
})

module.exports = mongoose.model('Drugs', drugsSchema);