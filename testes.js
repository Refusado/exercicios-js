let arr = [1, 0, 1, 0, 1];

// TODO: Retorne uma saída com os zeros devidamente duplicados

console.log(arr);
const originalLength = arr.length;
for (let i = 0; i < originalLength; i++) {
  if (arr[i] == 0) {
    arr.splice(i + 1, 0, 0);
    i++;
  }
}
arr.length = originalLength;

console.log(arr);
