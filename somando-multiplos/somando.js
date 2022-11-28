let a = 5;
let N = 20;

result = 0;
for (let i = 0; i <= N; i++) 
    if (i % a === 0)
        result += i;

console.log(result);