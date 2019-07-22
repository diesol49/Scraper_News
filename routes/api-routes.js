// List our Dependencies
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models/Index");

module.exports = app => {
    // Home page
    app.get("/", (req, res) => {
        res.send("Hello World");
    });

    // Saved Page


    // Scrape data to mongodb


    // display articles after scraping


    // save articles

    // get current notes

    // save a note

    // delete note
}