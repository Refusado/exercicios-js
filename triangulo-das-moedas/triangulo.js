let N = 12;

let line = 0;
for (let i = 0; N > i; i++)
    N -= ++line;

console.log(line);

