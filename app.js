const express = require("express"),
		app = express();

app.get("/", (req,res) => {
	res.render("landing");
});

app.listen(3000, process.env.IP, () => {
	console.log("Server Running");
});