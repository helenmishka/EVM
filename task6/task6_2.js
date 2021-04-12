"use strict";

let mas_user = [
    { login: 'petya', password: '1230', hobbi: 'fghj', age: 15 },
    { login: 'vasya', password: 'qweert', hobbi: 'dfghjk', age: 22 },
    { login: 'grisha', password: 'sdfgh', hobbi: 'dfghjk', age: 33 },
    { login: 'olya', password: '1111', hobbi: 'dertyu', age: 45 },
    { login: 'katya', password: '3456', hobbi: 'qwerrty', age: 17 }
  ]
// импортируем библиотеки
const express = require("express");
const fs = require("fs")
const cookieSession = require("cookie-session");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// работа с сессией
app.use(cookieSession({
    name: 'session',
    keys: ['hhh', 'qqq', 'vvv'],
    maxAge: 24 * 60 * 60 * 1000 * 365
}));

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/autorization", function(request, response) {
    const nameString = "page.html";
    if (fs.existsSync(nameString)) {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } else {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});

app.get("/sign", function(request, response) {
    
    const login = request.query.login;
    const password = request.query.password;
    let flag = 0

    for (let i = 0; i < mas_user.length; i++){
        if (mas_user[i].login === login && mas_user[i].password === password) {
            request.session.login = login;
            request.session.password = password;
            let infoObject = {
                login: mas_user[i].login,
                HobbiValue: mas_user[i].hobbi,
                AgeValue: mas_user[i].age
            }
            flag = 1
            response.render("pageUser.hbs", infoObject);
        }
    }  
    if (flag == 0){
        if(!request.session.login) return response.redirect("/autorization")
        if(!request.session.password) return response.redirect("/autorizaion")
    }
} 
)