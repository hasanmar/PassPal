// Dependencies
const express = require('express');
const mongoose = require('mongoose');

// Require and initialze dotenv
require('dotenv').config();

// PORT Configuration
const port = 5010;

// Initailze Express
const app = express();

// Look for all the static files in public folder (css, JS, Images, Audio, Videos).
app.use(express.static("public"));

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
<<<<<<< HEAD
const indexRoute = require('./routes');
// const articleRoute = require('./routes/articles');
// const authorRoute = require('./routes/authors');
const authRoute = require('./routes/auth');
=======
const indexRoute = require('./routes/index');
const historyRoute = require('./routes/historyRoute');
const accountRoute = require('./routes/accountRoute');
>>>>>>> 6a56f1747e2b7c39b2a596bdcb1e0d89a0ad30e1


// Mount Routes
app.use('/', indexRoute);
<<<<<<< HEAD
// app.use('/', articleRoute);
// app.use('/', authorRoute);
app.use('/', authRoute);
=======
app.use('/', historyRoute);
app.use('/', accountRoute);
>>>>>>> 6a56f1747e2b7c39b2a596bdcb1e0d89a0ad30e1

// Node.js to look in a folder views for all the ejs files.
app.set("view engine", "ejs");
app.set('views', './views');

app.get('/signup', (req, res) => {
  res.render(__dirname + '/views/signup.ejs');
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
