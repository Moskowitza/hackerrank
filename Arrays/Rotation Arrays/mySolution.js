let testArray = [1, 2, 3, 4, 5];
let integer = 2;
function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let firstElement = a.shift();
    a.push(firstElement);
  }
  return a;
}

console.log(rotLeft(testArray, integer));
