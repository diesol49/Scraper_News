const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    teaser: {
        type: String,
        required: true
    },
    imgLink: {
        type: String,
        required: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// creates model from the above schema
const Article = mongoose.model("Article", ArticleSchema);
// exporting our model
module.exports = Article;