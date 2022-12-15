const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  botanicalName: String,
  type: {type: String, required: true},
  temperature: {type: String, required: true},
  requiresLight: {type: String, required: true},
  waterAmount: {type: String, required: true},
  price: {type: Number, required: true},
  inStock: {type: Number, required: true},
  image: String
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant;