"use strict";


const readlineSync = require('readline-sync')
const fs = require("fs");

function read_extension(){
    const extension = readlineSync.question("Input file extension: ")
    return extension
}

function read_folder(){
    const folder = readlineSync.question("Input folder: ")
    return folder
}

function read_name_files(folder){
    const arr = fs.readdirSync(folder);
    return arr
}

function get_info(arr, extension){
    for(let i = 0; i < arr.length; i++) {
        const fileName = arr[i];
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === "."){
                var temp = ''
                for(let k = j + 1; k < arr[i].length; k++){
                    temp += arr[i][k]
                }
                if (temp === extension){
                    const contentString = fs.readFileSync(arr[i], "utf8");
                    console.log(contentString);
                }
            }
        }
    }
}

function main(){
    get_info(read_name_files(read_folder()), read_extension())
}

main()