/*
Garçom

Parte do treinamento de um novo garçom é carregar uma grande bandeja com várias latas de bebidas e copos e entregá-las todas numa mesa do restaurante. Durante o treinamento é comum que os garçons deixem cair as bandejas, quebrando todos os copos.

A SBC -- Sociedade Brasileira de Copos -- analisou estatísticas do treinamento de diversos garçons e descobriu que os garçons em treinamento deixam cair apenas bandejas que têm mais latas de bebidas que copos. Por exemplo, se uma bandeja tiver 10 latas e 4 copos, certamente o garçom em treinamento a deixará cair, quebrando os 4 copos. Já se a bandeja tiver 5 latas e 6 copos, ele conseguirá entregá-la sem deixar cair.

Escreva um programa que, dado o número de latas e copos em cada bandeja que o garçom tentou entregar, imprime o total de copos que ele quebrou.
Entrada

A primeira linha da entrada contém um inteiro NNN representando o número de bandejas que o garçom tentou entregar. As NNN linhas seguintes representam as NNN bandejas. Cada linha contém dois inteiros LLL e CCC, indicando o número de latas e o número de copos naquela bandeja, respectivamente.
Saída

Seu programa deve imprimir uma única linha, contendo um único inteiro, indicando o número total de copos que o garçom quebrou.

Exemplos de inputs:

4
10 6
8 8
5 1
100 100
'4\n10 6\n8 8\n5 1\n100 100'

3
10 5
6 8
3 3 
'3\n10 5\n6 8\n3 3'
*/

const input = '4\n10 6\n8 8\n5 1\n100 100';

const inputArray = input.split('\n');

var coposQuebrados = 0;
function result(arr) {
    for (let i = 1; i < arr[0]; i++) {
        let lataECopos = arr[i].split(' ');

        let latas = parseInt(lataECopos[0]);
        let copos = parseInt(lataECopos[1]);
        
        if (latas > copos) {
            coposQuebrados += copos;
        }
    }
}

result(inputArray);
console.log(coposQuebrados);