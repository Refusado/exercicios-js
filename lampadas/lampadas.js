/*
Você está de volta em seu hotel na Tailândia depois de um dia de mergulhos. O seu quarto tem duas lâmpadas. Vamos chamá-las de AAA e BBB. No hotel há dois interruptores, que chamaremos de I1I_1I1​ e I2I_2I2​. Ao apertar I1I_1I1​, a lâmpada AAA acende se estiver apagada, e apaga se estiver acesa. Se apertar I2I_2I2​, cada uma das lâmpadas AAA e a BBB troca de estado: se estiver apagada, fica acesa e se estiver acesa apaga.

As lâmpadas inicialmente estão ambas apagadas. Seu amigo resolveu bolar um desafio para você. Ele irá apertar os interruptores em uma certa sequência, e gostaria que você respondesse o estado final das lâmpadas AAA e BBB.

Entrada

A primeira linha contém um número NNN que representa quantas vezes seu amigo irá apertar algum interruptor. Na linha seguinte seguirão N números, que pode ser 1, se o interruptor I1I_1I1​ foi apertado, ou 2, se o interruptor I2I_2I2​ foi apertado.

Saída

Seu programa deve imprimir dois valores, em linhas separadas. Na primeira linha, imprima 1 se a lâmpada AAA estiver acesa no final das operações e 0 caso contrário. Na segunda linha, imprima 1 se a lâmpada BBB estiver acesa no final das operações e 0 caso contrário.
*/

const input = '4\n2 1 2 2';
const inputArray = input.split('\n')[1].split(' ');

N = 3;
E = [1, 2, 2];
EE = [2, 1, 2, 2];


const result = function(arr) {
    if (arr.length % 2 == 0) {
        var estadoI = 0;
    }
    else {
        var estadoI = 1;
    }

    let nII = arr.filter(function (value) {
        return value == 2;
    });

    if (nII.length % 2 == 0) {
        var estadoII = 0;
    }
    else {
        var estadoII = 1;
    }
    
    console.log(estadoI);
    console.log(estadoII);
}

result(E);