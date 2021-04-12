"use strict";

const fs = require("fs")
const express = require("express");
const app = express();
const port = 5001;
app.listen(port);
console.log("Server on port " + port);

app.get("/insert/record", function(request, response) {
    const name = request.query.n
    if (!name) return response.end(JSON.stringify({result: "Error name"}))
    const price = request.query.p
    if (!price) return response.end(JSON.stringify({result: "Error price"}))
    console.log(price)
    const priceInt = parseInt(price)

    const JSONstr = fs.readFileSync("data.txt", "utf8");
    let data = JSON.parse(JSONstr)
    data.push({"name": name, "price": priceInt})
    console.log(priceInt)
    data = JSON.stringify(data)
    fs.writeFileSync("data.txt", data);
    response.end(JSON.stringify({result: "Car data has been successfully added"}))
})

app.get("/select/record", function(request, response) {
    const JSONstr = fs.readFileSync("data.txt", "utf8");
    response.end(JSONstr)
})