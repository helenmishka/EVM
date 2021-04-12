"use strict";

// получаем параметры скрипта
const arr = (process.argv[2]).split(",")

// импортируем библиотеку
const execSync = require('child_process').execSync;

// функция для вызова программы и получения результата её работы
function useCmd(s) {
	const options = {encoding: 'utf8'};
	const cmd = s.toString();
	const answer = execSync(cmd, options);
	return answer.toString();
}

function mas_factorial(arr){
    for (let i = 0; i < arr.length; i++){
        const facCommand = `node task7_2.js ${parseInt(arr[i])}`;
        let fac = useCmd(facCommand);
        fac = parseInt(fac);
        console.log(fac);
    }
}

mas_factorial(arr)