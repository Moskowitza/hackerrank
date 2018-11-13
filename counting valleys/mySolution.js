let steps = 8;
let array = ["U", "D", "D", "D", "U", "D", "U", "U"];

function countingValleys(n, s) {
  let elevation = 0;
  let valleys = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i]== "D" ) {
        elevation--;
        console.log("down" + elevation)
    } else{
        elevation++;
        console.log("Up" + elevation)
    }
    if (s[i]=='U'&& elevation == 0) {
      valleys++;
    }
  }
  return valleys;
}
console.log(`Number of Valleys:  ${countingValleys(steps,array)}`)

