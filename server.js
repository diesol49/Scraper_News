const express = require("express");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const parser = require("body-parser");
const exphdb = require("express-handlebars");
const request = require("request");

// Enable our "express" package
const app = express();

// We're going to require all our files within the models folder
const db = require("./models");

let PORT = process.env.PORT || 3000;

// We're placing our static content in the "public" folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set our Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up our server to begin listening to our client request
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});