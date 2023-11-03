const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("home");
});

router.get("/home", (req, res) => {
    res.render("sample.ejs");
});

router.get("/news", (req, res) => {
    res.render("news.handlebars");
});

module.exports = router; //export default