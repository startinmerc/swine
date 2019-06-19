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
		features: [
			{label: "Wheels", checked:undefined},
			{label: "Roof", checked: "on"},
			{label: "Engine", checked: "on"},
			{label: "Floor", checked:undefined}
			],
		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		price: "3000"
	},
	{
		name: "Van Two",
		image: {
			src: "http://source.unsplash.com/ndiBRRnb7II",
			alt: "Van One product image"
		},
		features: [
			{label: "Wheels", checked:undefined},
			{label: "Roof", checked: "on"},
			{label: "Engine", checked: "on"},
			{label: "Floor", checked:undefined}
			],
		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		price: "3000"
	},
	{
		name: "Van Three",
		image: {
			src: "http://source.unsplash.com/ndiBRRnb7II",
			alt: "Van One product image"
		},
		features: [
			{label: "Wheels", checked:undefined},
			{label: "Roof", checked: "on"},
			{label: "Engine", checked: "on"},
			{label: "Floor", checked:undefined}
			],
		details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Blog Two",
		image: { 
			src: "http://source.unsplash.com/random/400x300",
			alt: "Blog image"
		},
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Blog Three",
		image: { 
			src: "http://source.unsplash.com/random/400x300",
			alt: "Blog image"
		},
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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