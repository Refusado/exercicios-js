let arr = [1, 0, 1, 0, 1];
const originalLength = arr.length;

// TODO: Retorne uma saída com os zeros devidamente duplicados

for (let i = 0; i < originalLength; i++) {
  if (arr[i] == 0) {
    arr.splice(i + 1, 0, 0);
    i++;
  }
}

arr.length = originalLength;
console.log(arr);