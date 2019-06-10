const	express = require("express"),
		router  = express.Router(),
		Product = require("../models/product");

// GET ALL
router.get("/", (req,res) => {
	Product.find({}, (err,allProducts) => {
		if (err) {
			console.log(err);
			res.redirect("back");
		} else {
			res.render("products/index", {products: allProducts});
		}
	})
});

// GET NEW FORM
router.get("/new", (req,res) => {
	res.render("products/new")
});

// POST NEW PRODUCT
router.post("/", (req,res) => {
	let newProduct = {
		name: req.body.name,
		image: {
			src: req.body.imgSrc,
			alt: req.body.imgAlt
		},
		features: req.body.features.split(" "),
		details: req.body.details,
		price: req.body.price
	};
	Product.create(newProduct, (err,newlyCreated) => {
		if (err) {
			console.log(err);
			res.redirect("back");
		} else {
			res.redirect("products")
		}
	});
});

module.exports = router