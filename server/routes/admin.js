const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adminLayout = '../views/layouts/admin'
const jwtSecret = process.env.JWT_SECRET

// Check login - Middleware that will log us out if cookie is absent

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (error) {
       res.status(401).json({message: 'Unauthorized'})
    }
}

//GET METHOD - Admin - login page
router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple blog created with NodeJs, Express and MongoDB"
        }

        res.render('admin/index', { ...locals, layout: adminLayout });
    } catch (error) {
        console.log(error)
    }
    });


//POST METHOD - Admin - Check login
router.post('/admin', async (req, res) => {
try {
    const { username, password } = req.body;

    const user = await User.findOne({ username })

    if(!user) {
        return res.status(401).json({message: 'invalid credentials'})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) {
        return res.status(401).json({message: 'invalid credentials'})
    }

    //save toke  to the cookie

    const token = jwt.sign({userId: user._id}, jwtSecret)
    res.cookie('token', token, { httpOnly: true})

    res.redirect('/dashboard')

} catch (error) {
    console.log(error)
}
});

//GET METHOD - Admin Dashboard - Authentication
router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
        const locals = {
            title: 'Dashboard',
            description: "Simple blog created with Node.js, Express & MongoDB"
        }
        
        const data = await Post.find();
        res.render('admin/dashboard', {
            locals,
            data, 
            layout: adminLayout
        })
    } catch (error) {
        console.log(error)
    }
});


//GET METHOD - Admin - Create new Post

router.get('/add-post', authMiddleware, async (req, res) => {
    try {
        const locals = {
            title: 'Add Post',
            description: "Simple blog created with Node.js, Express & MongoDB"
        }
        
        const data = await Post.find();
        res.render('admin/add-post', {
            locals,
            layout: adminLayout
        })  
    } catch (error) {
        console.log(error)
    }
});

//POST METHOD - Admin - Create new Post

router.post('/add-post', authMiddleware, async (req, res) => {
    try {
        console.log(req.body)

        try {
            const newPost = new Post ({
                title: req.body.title,
                body: req.body.body
            })

            await Post.create(newPost)
            res.redirect('/dashboard')
        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        console.log(error)
    }
});

//GET METHOD - Admin - Update Post

router.get('/edit-post/:id', authMiddleware, async (req, res) => {
    try {
        
        const locals = {
            title: 'Add Post',
            description: "Simple blog created with Node.js, Express & MongoDB"
        }

        const data = await Post.findOne({ _id: req.params.id });

        res.render('admin/edit-post', {
            locals,
            data,
            layout: adminLayout
        })
        
        
    } catch (error) {
        console.log(error)
    }
});

//PUT METHOD - Admin - Create new Post

router.put('/edit-post/:id', authMiddleware, async (req, res) => {
    try {
        
        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
            updatedAt: Date.now()
        });

        res.redirect(`edit-post/${req.params.id}`)
        
        
    } catch (error) {
        console.log(error)
    }
});

//DELETE METHOD - Admin - Delete post

router.delete('/delete-post/:id', authMiddleware, async (req, res) => {
    
    try {
        
        await Post.deleteOne( { _id: req.params.id })
        res.redirect('/dashboard')

    } catch (error) {
        console.log(error)
    }

});

//GET METHOD - Admin - Logout (remove cookie)

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    // res.json({message: 'Logout Successful!'});
    res.redirect('/')
});





    // router.post('/admin', async (req, res) => {
    //     try {
    
    //         const { username, password } = req.body;
    //         console.log(req.body)
    
    //         res.redirect('/admin')
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     });

//POST METHOD - Admin - register
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)


        try {
            const user = await User.create({ username, password:hashedPassword })
            res.status(201).json({message: 'user created', user})
        } catch (error) {
            if(error.code === 11000 ) {
                res.status(409).json({ message: 'user already in use'})
            }
            res.status(500).json({message: 'internal server error'})
        }
        
    } catch (error) {
        console.log(error)
    }
    });


module.exports = router;