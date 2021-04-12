"use strict";

const fs = require("fs");

const folder = "./test";

const arr = fs.readdirSync(folder);

function check_txt(filename){
    for(let j = 0; j < filename.length; j++){
        if(filename[j] === "."){
            var temp = ''
            for(let k = j + 1; k < filename.length; k++){
                temp += filename[k]
            }
            if (temp === "txt"){
                return true
            }
        }
    }
    return false
}

function file_recursion(folder){
    const arr = fs.readdirSync(folder);
    for(let i = 0; i < arr.length; i++) {
        if (check_txt(arr[i]) === true){
            const contentString = fs.readFileSync(folder + "/" + arr[i], "utf8");
            if (contentString.length <= 10){
                console.log(arr[i])
            }
        }
        else {
            file_recursion(folder + "/" + arr[i]);
        }
    }
}

function main(){
    file_recursion(folder)
}

main()
