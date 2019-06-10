const express = require("express"),
		app = express(),
		bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", (req,res) => {
	res.render("landing");
});

app.get("/about", (req,res) => {
	res.render("about");
});

app.get("/products", (req,res) => {
	res.render("products");
});

app.get("/blog", (req,res) => {
	res.render("blog");
});

app.listen(3000, process.env.IP, () => {
	console.log("Server Running");
});