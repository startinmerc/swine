const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	title: String,
	image: {
		src: String,
		alt: String
	},
	body: String,
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Blog", blogSchema);