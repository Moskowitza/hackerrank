// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
const arr = [
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
function hourglassSum(arr) {
  let arrayOfSums = [];
  const ourArray = arr;
  let sum=0;

    for (i = 0; i < 4; i++) {
        console.log(i)
        console.log("arr[i] "+ arr[i])
          let sum =  (arr[i] +
            arr[i + 1] +
            arr[i + 2] +
            arr[i + 7] +
            arr[i + 12] +
            arr[i + 13] +
            arr[i + 14]);
            arrayOfSums.push(sum);
    }
    return arrayOfSums;
}
console.log(hourglassSum(arr));

  //   for (i = 6; i < 10; i++) {
  //     arrayOfSums.push(OneSum());
  //   }
  //   for (i = 12; i < 16; i++) {
  //     arrayOfSums.push(OneSum());
  //   }
  //   for (i = 18; i < 22; i++) {
  //     arrayOfSums.push(OneSum());
  //   }
  //   console.log(arrayOfSums)