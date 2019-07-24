// List our Dependencies
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = app => {
    // Home page
    app.get("/", (req, res) => {
        // this will look for any existing articles
        // & if found, we will sort by timestamp
        db.Article.find({})
        .sort({timestamp: -1})
        .then((dbArticle) => {
            if (dbArticle.length == 0) {
                res.render("index");
        // Above, the code will direct you to index
        // if no articles exist, or to /articles
        // to display existing articles
            } else {
                res.redirect("/articles");
            }
        })
        .catch((err) => {
            res.json(err);
        });
    });

    // Saved Page
    app.get("/saved", (req, res) => {
// since our default value for saved articles is false,
// below we change it to true to show saved articles
        db.Article.find({ saved: true })
            .then((dbArticle) => {
                let articleObj = { article: dbArticle };
                res.render("saved", articleObj);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Scrape data to mongodb
    app.get("/scrape", (req, res) => {
        axios.get("https://www.npr.org/sections/news/")
        .then((response) => {
            let $ = cheerio.load(response.data);

            $(".item has-image").each(function(i,element) {
                let result = {};
                
                result.title = $(this).children(".item-info")
                .find("h2.title").text();

                result.link = $(this).children(".item-info")
                .find("h2.title").find("a").attr("href");

                result.teaser = $(this).children(".item-info")
                .find("p.teaser").text();

                result.imgLink = $(this).children(".item-image")
                .find("a").find("img").attr("src");
            // push object into the result array
                if (result.title && result.link && result.teaser && result.imgLink) {
                    articles.push(result);
                }
            });
        })


    // display articles after scraping
    app.get("/articles", (req, res) => {
        db.Article.find({})
        .sort({timestamp: -1})
        .then((dbArticle) => {
            let articleObj = {article: dbArticle};
            res.render("index", articleObj);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    // save articles


    // get current notes

    // save a note

    // delete note
}