const s = 'aabbccdddeeeeeeeeeedffdefff';
let result = '';

for (let i = 0; i < s.length; i++) {
  const str = s[i];
  if (result.includes(str)) continue;
  result += str;
}

console.log(result);