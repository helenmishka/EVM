"use strict";

function read_file(filename){
    const fs = require("fs")
    const nameString = filename
    const contentString = fs.readFileSync(nameString, "utf8")
    const obj = JSON.parse(contentString)
    return obj
}

function check_vowels(obj){
    var vowels = "aeiouyq"
    for (let i = 0; i < obj.mas.length; i++){
        let count = 0
        for (let j = 0; j < obj.mas[i].length; j++){
            for (let k = 0; k < vowels.length; k++){ 
                if (obj.mas[i][j] === vowels[k]){
                    count++
                }
            }
        if (count === obj.mas[i].length){
            console.log(obj.mas[i])
            }
        }
    }
}

function main(){
    const obj = read_file("text.txt")
    check_vowels(obj)
}

main()