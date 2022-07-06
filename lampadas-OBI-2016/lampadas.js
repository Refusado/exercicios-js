// const input = '4\n2 1 2 2';
const input = '3\n1 2 2';
const inputArray = input.split('\n')[1].split(' ');

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

result(inputArray);