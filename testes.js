let N = 10;

let ns = [];
for (; N > 0; N--) {
    ns.push(N);
}

let times = ns.length - 1;
let result = 0;
let operation = 1;
for (let i = 0; i < times; i++) {

    console.log(ns);

    if (operation === 1) {
        if (i === 0) {
            result = ns[0] * ns[1];
            ns = ns.slice(1, ns.length);
        } else {
            result *= ns[0];
        }
    }
    if (operation === 2) {
        result /= ns[0];
    }
    if (operation === 3) {
        result += ns[0];
    }
    if (operation === 4) {
        result -= ns[0];
        operation = 0;
    }

    ns = ns.slice(1, ns.length);
    operation++;
}

console.log(result);