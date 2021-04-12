"use strict";

const fs = require("fs")
const express = require("express");
const app = express();
const port = 5002;
app.listen(port);
console.log("Server on port " + port);

app.get("/insert/record", function(request, response) {
    const StoreHouseName = request.query.s
    if (!StoreHouseName) return response.end(JSON.stringify({result: "Error StoreHouseName"}))
    const cars = request.query.c
    if (!cars) return response.end(JSON.stringify({result: "Error cars"}))
    const JSONstr = fs.readFileSync("data.txt", "utf8");
    let data = JSON.parse(JSONstr)
    let arr_cars = cars.split(",")
    data.push({"StoreHouseName": StoreHouseName, "cars": arr_cars})
    data = JSON.stringify(data)
    fs.writeFileSync("data.txt", data);
    response.end(JSON.stringify({result: "Storehouse data has been successfully added"}))
})

app.get("/select/record", function(request, response) {
    const JSONstr = fs.readFileSync("data.txt", "utf8");
    response.end(JSONstr)
})