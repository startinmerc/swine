const express = require("express"),
		app = express(),
		bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const products = [
		{
			name: "Van One",
			image: {
				src: "http://source.unsplash.com/ndiBRRnb7II",
				alt: "Van One product image"
			},
			features: ["wheels","windows","doors"],
			details: "Lorem ipsum blah blah blah",
			price: "3000"
		},
		{
			name: "Van Two",
			image: {
				src: "http://source.unsplash.com/ndiBRRnb7II",
				alt: "Van One product image"
			},
			features: ["wheels","windows","doors"],
			details: "Lorem ipsum blah blah blah",
			price: "3000"
		},
		{
			name: "Van Three",
			image: {
				src: "http://source.unsplash.com/ndiBRRnb7II",
				alt: "Van One product image"
			},
			features: ["wheels","windows","doors"],
			details: "Lorem ipsum blah blah blah",
			price: "3000"
		},
	];
const blogs = [
		{
			title: "Blog One",
			image: { 
				src: "http://source.unsplash.com/random/400x300",
				alt: "Blog image"
			},
			body: "Lorem"
		},
		{
			title: "Blog Two",
			image: { 
				src: "http://source.unsplash.com/random/400x300",
				alt: "Blog image"
			},
			body: "Lorem"
		},
		{
			title: "Blog Three",
			image: { 
				src: "http://source.unsplash.com/random/400x300",
				alt: "Blog image"
			},
			body: "Lorem"
		}
	]


app.get("/", (req,res) => {
	res.render("landing");
});

app.get("/about", (req,res) => {
	res.render("about");
});

app.get("/products", (req,res) => {
	res.render("products/index", {products: products});
});

app.get("/products/new", (req,res) => {
	res.render("products/new")
});

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
	}
	products.push(newProduct);
	res.redirect("products");
});

app.get("/blog", (req,res) => {
	res.render("blog/index", {blogs:blogs});
});

app.get("/blog/new", (req,res) => {
	res.render("blog/new")
});

app.post("/blog", (req,res) => {
	let newBlog = {
		title: req.body.title,
		image: {
			src: req.body.imgSrc,
			alt: req.body.imgAlt
		},
		body: req.body.body,
	}
	blogs.push(newBlog);
	res.redirect("blog");
});

app.listen(3000, process.env.IP, () => {
	console.log("Server Running");
});