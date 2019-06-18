const	express = require("express"),
		router = express.Router(),
		Blog = require("../models/blog");

// GET ALL
router.get("/", (req,res) => {
	Blog.find({}, (err,allBlogs) => {
		if (err) {
			console.log(err);
			res.redirect("back");
		} else {
			res.render("blog/index", {blogs:allBlogs});
		}
	});
});

// GET NEW FORM
router.get("/new", (req,res) => {
	res.render("blog/new");
});

// SHOW INDIVIDUAL
router.get("/:id", (req,res) => {
	Blog.findById(req.params.id, (err,foundBlog) => {
		if (err || !foundBlog) {
			res.redirect("back");
		} else {
			res.render("blog/show", {blog:foundBlog})
		}
	});
});

// POST NEW BLOG
router.post("/", (req,res) => {
	let newBlog = {
		title: req.body.title,
		image: {
			src: req.body.imgSrc,
			alt: req.body.imgAlt
		},
		body: req.body.body,
	};
	Blog.create(newBlog, (err,newlyCreated) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect("blog");
		}
	});
});

module.exports = router;