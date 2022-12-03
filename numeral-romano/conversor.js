// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// TODO: crie um conversor que altere o Numeral Romano para um Inteiro e imprima esse inteiro

let c = "V".split('');
let result = 0;

const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}

c.map((s, i, arr) => {
    if (map[s] < map[arr[i + 1]])
        result -= map[s];
    else
        result += map[s];
});

console.log(result);