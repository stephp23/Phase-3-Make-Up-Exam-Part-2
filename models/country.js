const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = new Schema(
	{
		country_name: { type: String, require: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("country", Country);