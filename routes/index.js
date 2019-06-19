const 	express = require("express"),
		router  = express.Router(),
		Email = require("../models/email");

router.get("/", (req,res) => {
	res.render("landing");
});

router.get("/about", (req,res) => {
	res.render("about");
});

router.get("/support/faq", (req,res) => {
	res.render("support/faq");
});

router.get("/support/contact", (req,res) => {
	res.render("support/contact");
});

router.post("/newsletter", (req,res) => {
	let newEmail = {
		email: req.body.email
	};
	Email.create(newEmail, (err,newlyCreated) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect("/");
		}
	});
});

module.exports = router;