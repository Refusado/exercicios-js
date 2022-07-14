const getFibonacci = (n) => {
    let sequence = [0, 1];

    for (let i = 1; i <= n; i++) {
        sequence.push((sequence[sequence.length - 1]) + (sequence[sequence.length - 2]));
    }

    return sequence[n];
}

console.log(getFibonacci(30));