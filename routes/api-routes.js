// List our Dependencies
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = app => {
    // Home page
    app.get("/", (req, res) => {
        res.render("index");
    });

    // Saved Page
    app.get("/saved", (req, res) => {

        db.Article.find({ saved: dbArticle })
            .then((dbArticle) => {
                let articleObj = { article: dbArticle };
                res.render("saved", articleObj);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Scrape data to mongodb
    app.post("/scrape", (req, res) => {


        //         /// scrape and then you are going to insert in the db
        //         var article ={
        //             title: ,
        //             link: ,


        //         }
        //         db.Article.create({article})
        //         .then((dbArticle) => {

        //         .catch(err => {
        //             res.json(err);
        //         });
        // redirect   });
    })

    app.get("/scrape", (req, res) => {


        /// scrape and then you are going to insert in the db
        // var article = {
        //     title: "title6",
        //     link: "dsjhkdsanlk",
        //     summary: "sdksd;lfdsa"
        // }

        db.Article.create(req.body)
            .then(function (dbArticle) {
                console.log(dbArticle)
            })
            .catch(function (err) {
                console.log("error in create:", err);
            });
    })

    // display articles after scraping
    app.get("/news", (req, res) => {
        console.log("/articles")

        db.Article.find()
            .then(function (dbArticles) {

                var hbobj = {
                    articles: dbArticles
                }
                console.log(hbobj)
                res.render("index", hbobj);
            }).catch(function (err) {
                console.log("error:", err)
            })
    });

    // save articles


    // get current notes

    // save a note

    // delete note
}