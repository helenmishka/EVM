"use strict";

const readlineSync = require('readline-sync')

function read_string(){
    const str = readlineSync.question("Input string: ")
    return str
}

const fs = require("fs")

function create_page(arr_name, adress){

    let data_1 = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Задание 3</title>
    </head>
    <body>  
        <h1>Страница A</h1>
        <form method="GET" action="`
    
    data_1 += adress + '">\n'

    for (let i = 0; i < arr_name.length; i++){
        data_1 += '            <input name="' + arr_name[i] + '" spellcheck="false" autocomplete="off"></input>\n'
    }

    data_1 += `            <br>
            <br>
            <input type="submit" value="Отправить запрос">
        </form>
</body>
</html>`

fs.writeFileSync("page.html", data_1)
}

let name = read_string()
let url = read_string()

name = name.split(' ')


create_page(name, url)

