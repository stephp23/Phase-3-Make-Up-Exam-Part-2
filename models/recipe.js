const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    dish_name: { type: String, required: true },
    origin_country: { type: String, required: true },
    ingredients: { type: String, required: true },
    img_url: {type: String, required: true},
  },
  {timestamps: true},
)
module.exports = mongoose.model('recipe', Recipe)