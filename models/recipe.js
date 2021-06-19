const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    dish_name: { type: String, required: true },
    country_id: { type: Schema.Types.ObjectId, ref: "countries" },

    ingredients: { type: String, required: true },
    image_url: {type: String, required: true},
  },
  {timestamps: true},
)
module.exports = mongoose.model('recipe', Recipe)