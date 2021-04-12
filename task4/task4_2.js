"use strict";

const fs = require("fs");

const express = require("express");

const app = express();
const port = 5015;
app.listen(port);
console.log("My server on port " + port);

app.get("/me/page", function(request, response) {
    const nameString = request.query.p;
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});

app.get("/mas", function(request, response) {
    const index = request.query.index;
    const indexInt = parseInt(index);
    
    const fs = require("fs");
    const nameString = "test.txt";
    const contentString = fs.readFileSync(nameString, "utf8");
    const mas = JSON.parse(contentString);
    if (indexInt < mas.length){
        const answerJSON = JSON.stringify({result: mas[indexInt]});
        response.end(answerJSON);
    }
});