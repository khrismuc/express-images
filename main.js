const express = require('express');
const fs = require('fs');

const app = new express();

app.use(express.static("public"));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    const fileArray = [];
    //passsing directoryPath and callback function
    const images = fs.readdirSync('./public/images');
    res.render('index', { images });
});

app.get('/api/images', function (req, res) {
    const fileArray = [];
    //passsing directoryPath and callback function
    const images = fs.readdirSync('./public/images');
    res.json(images);
});


console.log("listening on port 3000");
app.listen(3000);