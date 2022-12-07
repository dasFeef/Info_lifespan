const express = require("express"); 
const app = express(); 
const path = require('path');

app.listen(3000); 
app.set('view engine', 'ejs')
app.use(express.static(path.join('./app')));


app.get(['/', '/startup'], (req, res) =>{
    res.render('index');
})

app.get('/home', (req, res) => {
    res.render('home')
})