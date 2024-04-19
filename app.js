require('dotenv').config();

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const connectDB = require('./server/config/db');

const app =express();
const PORT = 3003 || process.env.PORT;

//Connect to Database
connectDB();

//Middleware to pass data for searchTerm
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware to parse cookies attached to client's request
app.use(cookieParser());

//Middleware to manage session data
app.use(session({
    secret: 'bubble tea',
    resave: false,
    saveUninitialized: true, 
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}))

//Middleware to serve static files
app.use(express.static('public'));

//Middleware to enable layout support
app.use(expressLayouts);

// Set the layout file for view - this is where we see web pages
app.set('layout', './layouts/main');

//Set the view engine to use EJS for rendering templates
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main') )
app.use('/', require('./server/routes/admin') )

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
});