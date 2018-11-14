// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
const input = [
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  2,
  4,
  4,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
  1,
  2,
  4,
  0
];
function hourglassSum(input) {
  let arr=new Array(...input)
  let arrayOfSums = [];

  let sum=0;
    for(let j=0; j<=18; j=j+6){
        // console.log(j)
        for (i = j; i < 4+j; i++) {
               sum =  (arr[i] +
                arr[i + 1] +
                arr[i + 2] +
                arr[i + 7] +
                arr[i + 12] +
                arr[i + 13] +
                arr[i + 14]);
                arrayOfSums.push(sum);
        }
    }
    
    return Math.max(...arrayOfSums);
}
console.log(hourglassSum(input));
