const express= require("express");
const nodemon= require("nodemon");
const env= require("dotenv").config();
const morgan= require("morgan");
const axios= require("axios");
const path= require("path")
const pug= require("pug")
const PORT= process.env.PORT

//Express Config 
const app= express()
app.use(express.json()) 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`); 
        next(); 
    }
})

app.get("/", (req, res) => {
    res.render("index");
  });

//Code here








//Server starting on port
app.listen(PORT)
console.log(`GO to http://localhost:${PORT}`)
