// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8");

// const input = "17\n1 1 1 0 1 0 0 1 0 1 0 0 1 1 1 1 0";
// const input = "8\n1 1 1 1 0 1 1 1";
const input = "3\n1 0 0";

const arr = input.split('\n')[1].split(' ');

function encontraCem(arr) {
    let cens = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            if (arr[i + 1] == 0) {
                if (arr[i + 2] == 0) {
                    cens++;
                }
            }
        }
    }

    return cens;
}

console.log(encontraCem(arr));