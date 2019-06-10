const 	express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mongoose = require("mongoose");
		seedDB = require("./seeds");

const 	Product = require("./models/product"),
		Blog = require("./models/blog"),

		indexRoutes = require("./routes/index"),
		productRoutes = require("./routes/products"),
		blogRoutes = require("./routes/blogs");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/swine");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedDB();

// ======================ROUTES======================

app.use("/", indexRoutes);
app.use("/products", productRoutes);
app.use("/blog", blogRoutes);

// =====================APP LISTENER=====================

app.listen(3000, process.env.IP, () => {
	console.log("Server Running");
});