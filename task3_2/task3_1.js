"use strict";
const readlineSync = require('readline-sync')

function read_number(){
    const number = readlineSync.question("Input count of strings: ")
    return parseInt(number)
}

function read_string(){
    const str = readlineSync.question("Input string: ")
    return str
}
function create_arr(number){
    const obj = {};
    obj.mas = []
    let count = 0
    for(let i = 0; i < number; i++){
        let a = read_string()
        if (a.length % 2 === 0)
        {
            obj.mas[count] = a
            count++
        }
    }
    return obj
}

function write_file(obj, filename){
    const jsonMAS = JSON.stringify(obj)
    const fs = require("fs")
    const nameString = filename
    fs.writeFileSync(nameString, jsonMAS);
}

function main(){
    let number = read_number()
    let obj = create_arr(number)
    write_file(obj, "result.txt")
}
main()