const express = require("express");
const bodyParser = require("body-parser");

//Connect to db code
const db = require('./queries')

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", function(req, res) {
    res.json({ info: "Test run" });
})

app.get('/users', db.getUsers)

app.listen(port, function() {
    console.log(`Port ${port}'u dinliyoh`);
})
