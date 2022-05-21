const express = require("express");
const bodyParser = require("body-parser");

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

app.listen(port, function() {
    console.log(`Port ${port}'u dinliyoh`);
})
