const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: String,
	image: {
		src: String,
		alt: String
	},
	features: [],
	details: String,
	price: Number
});

module.exports = mongoose.model("Product", productSchema);