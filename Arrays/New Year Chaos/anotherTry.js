console.log("New Year Chaos");
const testArr1 = [2, 1, 5, 3, 4]; //3
const testArr2 = [2, 5, 1, 3, 4]; //Too chaotic
const testArr3 = [5, 1, 2, 3, 7, 8, 6, 4]; //Too chaotic
const testArr4 = [1, 2, 5, 3, 7, 8, 6, 4]; //7
// const test =  [0, 1, 2, 3, 4, 5, 6, 7]; //none
function minimumBribes(q) {
  let bribes = 0;
  let min = q.length; //the end of what we check
  for (var i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      return `Too chaotic`;
    }
    if (q[i] > i + 1) {
      bribes += q[i] - (i + 1);
    } else {
      if (min > q[i]) {
        min = q[i];
      } else if (q[i] != min) {
        bribes++;
      }
    }
  }
  return bribes;
}

console.log(`test one ${minimumBribes(testArr1)}`);
// console.log(`test two ${minimumBribes(testArr2)}`);
// console.log(`test three ${minimumBribes(testArr3)}`);
// console.log(`test four ${minimumBribes(testArr4)}`);
