const express = require("express");
const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

const PORT = process.env.PORT || 3001;

app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/producto.html"));
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
