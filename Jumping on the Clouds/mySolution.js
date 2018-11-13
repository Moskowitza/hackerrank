let array = [0, 0, 1, 0, 0, 1, 0];
let array2 = [0, 0, 0, 0, 1, 0];

function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length-1; i++) {
    console.log(`position c${i}`);
    if (c[i + 2] === 0) {
      // take the jump
      jumps++;
      //and move ahead in the array
      console.log(`Double Jump  ${jumps}`);
      i++;
    } else {
      //just move one
      jumps++;
      console.log(`Single Jump ${jumps}`);
    }
  }
  return jumps;
}
console.log(`array1 ${jumpingOnClouds(array)}`);
console.log(`array2 ${jumpingOnClouds(array2)}`);
