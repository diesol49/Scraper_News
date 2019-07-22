// List our Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
// const parser = require("body-parser");
const exphbs = require("express-handlebars");
const request = require("request");
const logger = require("morgan");

// Enable our "express" package
const app = express();

let PORT = process.env.PORT || 3000;


// Morgan for logging requests
app.use(logger("dev"));

// We're placing our static content in the "public" folder
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set our Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to our API routes file
// require("./routes/api-routes")(app);

// connecting to Mongo
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

let db = mongoose.connection;
db.on("error", error => {
    console.log("Connection " + error);
});

// Set up our server to begin listening to our client request
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});