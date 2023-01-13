const express = require("express"); 
const app = express(); 
const path = require('path');

const german = require("./langs/german");
const english = require("./langs/english");

app.listen(4000); 
app.set('view engine', 'ejs')
app.use(express.static(path.join('./app')));


app.get(['/', '/de', '/de/about', '/about'], (req, res) => {
    res.render('index', german);
})

app.get(['/en', '/en/about'], (req, res) => {
    res.render('index', english);
})

app.get(['/home', '/de/home'], (req, res) => {
    res.render('home', german)
})

app.get(['/en/home'], (req, res) => {
    res.render('home', english)
})

app.get(['/sources', '/de/sources'], (req, res) => {
    res.render('sources', german)
})

app.get(['/en/sources'], (req, res) => {
    res.render('sources', english)
})