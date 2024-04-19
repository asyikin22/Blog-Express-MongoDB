const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET METHOD - HOME
router.get('', async (req, res) => {
const locals = {
    title: "NodeJS Blog",
    description: "Simple blog created with NodeJs, Express and MongoDB"
}

try {
    const data = await Post.find();
    res.render('index', { ...locals, data });
} catch (error) {
    console.log(error)
}

});

//POST METHOD - Post:id

router.get('/post/:id', async (req, res) => {
    try {
       let slug = req.params.id;
        
        
        const data = await Post.findById( { _id:slug});

        const locals = {
            title: data.title,
            description: "Simple blog created with NodeJs, Express and MongoDB"
        }

        res.render('post', { ...locals, data });
    } catch (error) {
        console.log(error)
    }
    
    });

//POST METHOD - searchTerm
// router.post('/search', async (req, res) => {
//     try {
//         const locals = {
//             title: "Search",
//             description: "Simple blog created with NodeJs, Express and MongoDB"
//         }

//         let searchTerm = req.body.searchTerm;
//         const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")

//         const data = await Post.find({
//             $or: [
//               { title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
//               { body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
//             ]
//           });

//        res.render("search", {
//         data, 
//         title,
//         locals
//        })

//     } catch (error) {
//         console.log(error)
//     }

//     });










router.get('/about', (req, res) => {
    res.render('about');
});

// function insertPostData () {
//     Post.insertMany([
//         {
//             title: "Building a Blog - Part 1",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog - Part 2",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog - Part 3",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog - Part 4",
//             body: "This is the body text"
//         },
//         {
//             title: "Building a Blog - Part 5",
//             body: "This is the body text"
//         },
//     ])
// }

// insertPostData();

module.exports = router;