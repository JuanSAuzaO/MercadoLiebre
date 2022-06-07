const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))   
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))   
});

app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))   
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Aplicación corriendo en el puerto 3000")
})