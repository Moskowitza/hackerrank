// The array on HackerRank is a 2D array.
test = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];
function hourglassSum(arr) {
  let maxSum = -63;
  let hourglass = 0;
  let top,
    mid,
    bottom = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      mid = arr[i + 1][j + 1];
      bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      hourglass = top + mid + bottom;
      if (hourglass > maxSum) {
        maxSum = hourglass;
      }
    }
  }
  return maxSum;
}
console.log(hourGlass(test));
