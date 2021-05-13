const express = require("express");
const morgan = require("morgan"); 
const nunjucks = require("nunjucks");

const app = express(); 

// Configurando Nunjucks
app.set("view engine", "html"); 
app.engine("html", nunjucks.render);
nunjucks.configure("views"); 

app.use(morgan("tiny"));

let tweetsDeEjemplo = [
    { id: 1, name: "juan", content: "este es un tweeettt de juan" },
    { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
    { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

app.get("/", function (req, res) {
    res.render("index", { tweets: tweetsDeEjemplo });
});

app.use(express.static("./public"));

app.listen(3000, function () {
    console.log("Server ON en el puerto 3000");
    console.log("http://localhost:3000")
});





