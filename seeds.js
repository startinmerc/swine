var mongoose 	= require("mongoose"),
	Product 	= require("./models/product"),
	Blog 		= require("./models/blog");


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
];

function seedDB(){
	Product.deleteMany({}, function(err){
		if (err) {
			console.log(err)
		} 
		else {
			Blog.deleteMany({}, (err) => {
				if (err) {console.log(err)}
			});
		}
		products.forEach(function(seed){
			Product.create(seed,function(err,product){
				if (err) {
					console.log(err)
				}
			});
		});
		blogs.forEach(function(seed){
			Blog.create(seed,function(err,blog){
				if (err) {
					console.log(err)
				}
			});
		});
		console.log("seeds created");
	});
}

module.exports = seedDB;