const express = require('express');
const index = require('./index');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 5000;

app.set("view engine", "ejs");

app.get('/', (req, res) =>  {
	res.send("<h1>hi</h1>");
});

app.get("/index", (req, res) => {
	res.render('index.ejs');
});

app.post("/form-submission", (req, res) => {
	res.send("hello" + req.body.firstname);
	// console.log(req.body.firstname);	
});

app.get("/route", (req, res) => {
	console.log(index);
	res.send("hello " + index.name);
});

app.get('/test', (req, res) => {
	res.send("hi test")
	// res.render("index", {data: ["asad", "ADFHRE"]});
});

app.listen(PORT, () => {
	console.log("Server started");
});
