// const input = '3\n10 5\n6 8\n3 3';
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