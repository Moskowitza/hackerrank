console.log("New Year Chaos");
const testArr1 = [2, 1, 5, 3, 4];
const testArr2 = [2, 5, 1, 3, 4];
const testArr3 = [5, 1, 2, 3, 7, 8, 6, 4];
const testArr4 = [1, 2, 5, 3, 7, 8, 6, 4];
function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length-1; i > 0; i--) {
    console.log(q[i], i, q[i] - i);
    if (q[i]- i > 3) {
      return "Too chaotic";
    } else if (q[i]- i > 1) {
      bribes = bribes + 2;
      console.log("add 2");
    } else if (q[i] - i > 0) {
      bribes = bribes + 1;
      console.log("add 1");
    }
  }
  return bribes;
}

console.log(`test one ${minimumBribes(testArr1)}`);
console.log(`test two ${minimumBribes(testArr2)}`);
console.log(`test three ${minimumBribes(testArr3)}`);
console.log(`test four ${minimumBribes(testArr4)}`);
