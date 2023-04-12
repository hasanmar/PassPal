// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

// Require and initialze dotenv
require('dotenv').config();

// PORT Configuration
const port = 5010;

// Initailze Express
const app = express();

// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
const buildPath = path.join(__dirname, 'build')
app.use(express.static(buildPath))
app.use(express.json())
// Require Express-EJS-Layouts
const expressLayouts = require("express-ejs-layouts");

// Look in to views folder for a file named layout.ejs
app.use(expressLayouts);

// Express Session and Passport
let session = require('express-session');

// Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: false,
  cookie: { maxAge: 36000000 }
}));


// Sharing the information with all web pages.
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
})

// Import Routes
const indexRoute = require('./routes/index');
const historyRoute = require('./routes/historyRoute');
const accountRoute = require('./routes/accountRoute');
const authRoute = require('./routes/auth');



// Mount Routes
app.use('/', indexRoute);
app.use('/', historyRoute);
app.use('/', accountRoute);
app.use('/', authRoute);


// Node.js to look in a folder views for all the ejs files.
app.set("view engine", "ejs");
app.set('views', './views');

app.get('/signup', (req, res) => {
  res.render(__dirname + '/views/signup.ejs');
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });




mongoose.set('strictQuery', false);
// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.f2mq1pr.mongodb.net/passpal?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
 
)

// Listen to specific port for incomming requests

app.listen(port, () => {
  console.log(`passpal is running on ${port}`);
})

app.get("/a", (req, res) => {
  res.render("home/another");
})
