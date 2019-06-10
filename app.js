const 	express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mongoose = require("mongoose");
		// seedDB = require("./seeds");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/swine");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// seedDB();

// STATIC INDEX ROUTES

app.get("/", (req,res) => {
	res.render("landing");
});

app.get("/about", (req,res) => {
	res.render("about");
});

// ====================PRODUCTS ROUTES====================

// PRODUCT SCHEMA

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

Product = mongoose.model("Product", productSchema);

// GET ALL
app.get("/products", (req,res) => {
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
app.get("/products/new", (req,res) => {
	res.render("products/new")
});

// POST NEW PRODUCT
app.post("/products", (req,res) => {
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

// =====================BLOGS ROUTES=====================

// BLOG SCHEMA
const blogSchema = new mongoose.Schema({
	title: String,
	image: {
		src: String,
		alt: String
	},
	body: String
});

Blog = mongoose.model("Blog", blogSchema);

// GET ALL
app.get("/blog", (req,res) => {
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
app.get("/blog/new", (req,res) => {
	res.render("blog/new")
});

// POST NEW BLOG
app.post("/blog", (req,res) => {
	let newBlog = {
		title: req.body.title,
		image: {
			src: req.body.imgSrc,
			alt: req.body.imgAlt
		},
		body: req.body.body,
	}
	Blog.create(newBlog, (err,newlyCreated) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect("blog");
		}
	});
});

app.listen(3000, process.env.IP, () => {
	console.log("Server Running");
});