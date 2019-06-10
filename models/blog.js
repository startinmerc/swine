const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	title: String,
	image: {
		src: String,
		alt: String
	},
	body: String
});

module.exports = mongoose.model("Blog", blogSchema);