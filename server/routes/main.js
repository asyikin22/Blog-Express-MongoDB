const express = require('express');
const router = express.Router()

//Routers
router.get('', (req, res) => {
const locals = {
    title: "NodeJS Blog",
    description: "Simple blog created with NodeJs, Express and MongoDB"
}

    res.render('index', locals);
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;