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
	});
});

// GET NEW FORM
router.get("/new", (req,res) => {
	res.render("products/new");
});

// POST NEW PRODUCT
router.post("/", (req,res) => {
	let newProduct = {
		name: req.body.name,
		image: {
			src: req.body.imgSrc,
			alt: req.body.imgAlt
		},
		features: [
				{label: "Wheels", checked: req.body.feature1},
				{label: "Roof", checked: req.body.feature2},
				{label: "Engine", checked: req.body.feature3},
				{label: "Floor", checked: req.body.feature4}
		],
		details: req.body.details,
		price: req.body.price
	};
	console.log(newProduct);
	Product.create(newProduct, (err,newlyCreated) => {
		if (err) {
			console.log(err);
			res.redirect("back");
		} else {
			res.redirect("products");
		}
	});
});

module.exports = router