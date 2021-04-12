"use strict";


const readlineSync = require('readline-sync')
const number = readlineSync.question("Input N: ")

const fs = require("fs");
var text = ''
for(let i = 0; i < parseInt(number); i++){
    const name = readlineSync.question("Input file name: ")
    const contentString = fs.readFileSync(name, "utf8");
    text += contentString
}

fs.writeFileSync("result3_5.txt", text);
