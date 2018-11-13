var s = "aba";
var n = 10;
// Complete the repeatedString function below.
function repeatedString(s, n) {
  let count = 0;
  let Arr = s.split("");
  let sArr = [];
  do {
    for (let j = 0; j < Arr.length; j++) {
      sArr.push(Arr[j]);
    }
  } while (sArr.length <= n);

  for (let i = 0; i <= n; i++) {
    if (sArr[i] === "a") {
      count++;
    }
  }
  return count;
}

console.log(repeatedString(s, n));
