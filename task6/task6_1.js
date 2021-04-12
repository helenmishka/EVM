"use strict";

let mas = [
    { NameGameValue: 'GTA', DescGameValue: 'dfghjk', AgeValue: 3 },
    { NameGameValue: 'WC', DescGameValue: 'kjhgfd', AgeValue: 12 },
    { NameGameValue: 'WWQ', DescGameValue: 'fghjkl', AgeValue: 18 },
    { NameGameValue: 'TTL', DescGameValue: 'qwerty', AgeValue: 16 }
  ]

  // импорт библиотеки
  const express = require("express");
  
  // запускаем сервер
  const app = express();
  const port = 5000;
  app.listen(port);
  console.log(`Server on port ${port}`);
  
  // активируем шаблонизатор
  app.set("view engine", "hbs");
  
  // заголовки в ответ клиенту
  app.use(function(req, res, next) {
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Origin", "*");
      next();
  });
  
  // выдача страницы с информацией о игре
  app.get("/page/game", function(request, response) {
    const a = request.query.a;
    let count = 0
    const infoObject = {
        game_mas: []
    }
    for(let i = 0; i < mas.length; i++){
        if (mas[i].AgeValue < a)
        {
            infoObject.game_mas[count] = mas[i]
            count++
        }
    }
    response.render("pageGame.hbs", infoObject);
  });
