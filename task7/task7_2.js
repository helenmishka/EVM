"use strict";

// получаем параметры скрипта
const number = parseInt(process.argv[2])

function factorial(number){
    let fac = 1
    for (let i = 2; i <= number; i++){
        fac *= i
    }
    return fac
}

// вывод сообщения на экран
console.log(factorial(number));