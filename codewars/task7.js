//* Bit Counting
//! ----------------------------------------------task---------------------------------------------------

//todo:  Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

// You can guarantee that input is non-negative.

//! ----------------------------------------------example:-----------------------------------------------------

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
//! ----------------------------------------------my_decision:-----------------------------------------------------

var countBits = function (n) {
  let newArray = [];
  for (let i = n; ; i) {
    if (i === 0 || i === 1) {
      newArray.push(i);
      break;
    }
    newArray.push(i % 2);
    i = Math.floor(i / 2);
  }
  newArray = newArray.reverse();
  let count = 0;

  for (let i = 0; i < newArray.length; i += 1) {
    if (newArray[i] === 1) {
      count += 1;
    }
  }
  console.log(count);
};

countBits(1234);

//! ----------------------------------------------❤ best_decision N1: jimmy-ringo❤-----------------------------------------------------
// countBits = n => n.toString(2).split('0').join('').length;

//! ----------------------------------------------best_decision N2: m_x86-----------------------------------------------------
// var countBits = function (n) {
//   return n.toString(2).replace(/0/g, '').length;
// };

//! ----------------------------------------------best_decision N3: DarkoKukovec-----------------------------------------------------
// function countBits(n) {
//   for (c = 0; n; n >>= 1) c += n & 1;
//   return c;
// }
