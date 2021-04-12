let a = {}
let count = 0;
let flag = true;
while (count < 100000 && flag) {
    try {
        const jsonString = JSON.stringify(a);
        a = {"item": a};
        if (count < 10) {
            console.log(a);
        }
    } catch (err) {
        flag = false;
        console.error(err.message);
    }
    count++
}
console.log("result: ",count);