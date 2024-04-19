require('dotenv').config();

const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app =express();
const PORT = 3003 || process.env.PORT;

//Middleware to serve static files
app.use(express.static('public'));

//Middleware to enable layout support
app.use(expressLayout);

// Set the layout file for view - this is where we see web pages
app.set('layout', './layouts/main');

//Set the view engine to use EJS for rendering templates
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main') )

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
});