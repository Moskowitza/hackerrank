var s = "aba";
var n = 10; //the number of characters we'll count
// Complete the repeatedString function below.
function repeatedString(s, n) {
  let asInString = 0;
  let remainderAs=0;
  let sArr = s.split("");
  let remainder = n % sArr.length;
  let multiplier=Math.floor(n / sArr.length);
console.log("multiplier: "+multiplier)
  console.log("remainder: "+remainder);
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] == "a") {
      asInString++;
    }
  }
  for (let i = 0; i < remainder; i++) {
    if (sArr[i] == "a") {
        remainderAs++;
    }
  }

  return asInString*multiplier+remainderAs;
}

console.log(repeatedString(s, n));
