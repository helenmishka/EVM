"use strict";

const express = require("express");
const fs = require("fs")
const request = require("request");

const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);


function sendPost(url, callback) {
    request({method: 'GET', url: url},
        function (error, response, body) {
            if(error) {
                callback(null);
            }
            else {
                callback(body);
            }
        }
    )
}

app.get("/main", function(request, response) {
    const nameString = request.query.page;
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
})

app.get("/new/car", function(request, response) {
    const n = request.query.n
    const p = request.query.p
    console.log(p)
    sendPost("http://localhost:5001/insert/record?n=" + n + "&p=" + p, function(answerString) {
        response.end(answerString)
    })
})

app.get("/find/cost", function(request, response) {
    const n = request.query.n
    sendPost("http://localhost:5001/select/record", function(answerString) {
        const arr = JSON.parse(answerString)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === n) {
                response.end(JSON.stringify({result: arr[i].price}))
                return
            }
        }
        response.end(JSON.stringify({result: "Not found"}))
    })
})

app.get("/new/housestore", function(request, response) {
    const s = request.query.s
    const c = request.query.c
    sendPost("http://localhost:5002/insert/record?s=" + s + "&c=" + c, function(answerString) {
        response.end(answerString)
    })
})

app.get("/data/housestore", function(request, response) {
    const s = request.query.s
    sendPost("http://localhost:5002/select/record", function(answerString) {
        const arr = JSON.parse(answerString)

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].StoreHouseName === s) {
                response.end(JSON.stringify({result: arr[i].cars}))
                return
            }
        }
        response.end(JSON.stringify({result: "Not found"}))
    })
})