"use strict";

let i = 0;
let flag = 0;

let interval = setInterval(() => {
    if (!flag) {
        i++;
        console.log(i);
        if (i === 10) {
            flag = 1;
        }
    }
}, 2000);

let interval2 = setInterval(() => {
    if (flag) {
        i++;
        console.log(i);
        if (i === 20) {
            i = 0;
            flag = 0;
        }
    }
}, 1000);
