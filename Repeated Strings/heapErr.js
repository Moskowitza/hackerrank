var s = "aba";
var n = 10; //the number of characters we'll count
// Complete the repeatedString function below.
function repeatedString(s, n) {
  let count = 0;
  let sArr = s.split("");
  let longArr = [];

  while (longArr.length < n) {
    for (let i = 0; i < sArr.length; i++) {
      if (longArr.length <= n && sArr[i] === "a") {
        count++;
      }
      longArr.push(sArr[i]);
    }
  }
  return count;
}

console.log(repeatedString(s, n));
