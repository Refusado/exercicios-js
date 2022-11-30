let N = 4;

if (N <= 2) {
    console.log(N);
    return;
}

let i = N;
let result = 0;
let ns = [];
for (; N > 0; N--) {
    ns.push(N);
}

while (ns.length > 0) {
    if (ns.length >= 4) {
        result += parseInt(ns[0] * ns[1]) / ns[2] + ns[3]
        ns.splice(0, 4)        
        while (ns.length >= 4) {
            result = result - parseInt(ns[0] * ns[1] / ns[2]) + ns[3]
            ns.splice(0, 4)
        }
        if (ns.lengh == 3) {
            result = result - parseInt((ns[0] * ns[1]) / ns[2])
            ns.splice(0, 3)
        }
        if (ns.length == 2) {
            result = result - (ns[0] * ns[1])
            ns.splice(0, 2)
        }
        if (ns.length == 1) {
            result = result - ns[0]
            ns.splice(0, 1)
        }
    }
    if (ns.lengh == 3) {
        result = result + parseInt((ns[0] * ns[1]) / ns[2])
        ns.splice(0, 3)
        if (ns.length == 2) {
            result = result - (ns[0] * ns[1])
            ns.splice(0, 2)
        }
        if (ns.length == 1) {
            result = result - ns[0]
            ns.splice(0, 1)
        }
    }
    if (ns.length == 2) {
        result = result - (ns[0] * ns[1])
        ns.splice(0, 2)
    }
}
console.log(parseInt(result))
