//* Find the odd int
//! ----------------------------------------------task---------------------------------------------------

//todo:  Given an array of integers, find the one that appears an odd number of times.

//todo:There will always be only one integer that appears an odd number of times.

//! ----------------------------------------------example:-----------------------------------------------------

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//! ----------------------------------------------my_decision:-----------------------------------------------------

function findOdd(A) {
  let newArray = A.sort();

  while (newArray.length > 1) {
    let arrayEl = newArray[0];
    let count = 0;

    for (let i = 0; newArray[i] === arrayEl; i += 1) {
      count += 1;
    }
    if (count % 2 !== 0) {
      break;
    }

    newArray = newArray.slice(count);
  }
  console.log(newArray[0]);

  return newArray[0];
}

findOdd([7]);
findOdd([0]);
findOdd([1, 1, 2]);
findOdd([0, 1, 0, 1, 0]);
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
findOdd([-1, -1, -2, -2, 1, 1, 2, 2, 20, 20, 3, 3, 4, 4, 5, 5, 5]);

// console.log(productName);

//! ----------------------------------------------❤ best_decision N1: Unnamed ❤-----------------------------------------------------

const findOdd = xs => xs.reduce((a, b) => a ^ b);

//! ----------------------------------------------best_decision N2: harms280-----------------------------------------------------
function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

//! ----------------------------------------------best_decision N3: daniel.silva-----------------------------------------------------

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2);
}
