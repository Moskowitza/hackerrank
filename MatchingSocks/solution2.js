const length1 = 9;
const array1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const length2 = 10;
const array2=[1, 1, 3, 1, 2, 1, 3, 3, 3, 3 ]

function sockMerchant(n, ar) {
  let pairs = 0;
  ar.sort();
  console.log
  for(i=0;i<ar.length;i++){
      if(ar[i]===ar[i+1]){
          pairs++;
          i++;
      }
  }
  return pairs;
}

console.log(sockMerchant(length1, array1));
console.log(sockMerchant(length2, array2));
