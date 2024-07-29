const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

var prompt = "";
var size = "";


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //to use css file

app.set("view engine", "ejs");



// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/openai', require('./routes/openaiRoutes'));


app.get("/", function(req, res){
    res.render("home");
});



// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started successfully");
  });
  