// List our Dependencies
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = app => {
    // We will list our home pg, just show Hello World in the beginning, then complete our home pg
    app.get("/", (req, res) => {
        res.send("Hello World");
    });
}