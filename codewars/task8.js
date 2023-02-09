//* Digital root is the recursive sum of all the digits in a number.
//! ----------------------------------------------task---------------------------------------------------

//todo:  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//! ----------------------------------------------example:-----------------------------------------------------
// 16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//! ----------------------------------------------my_decision:-----------------------------------------------------

function digitalRoot(n) {
  let newArray = String(n).split('');

  let resultSum = 0;
  for (let i = 0; i < newArray.length; i += 1) {
    resultSum += Number(newArray[i]);

    if (i === newArray.length - 1 && String(resultSum).length > 1) {
      newArray = String(resultSum).split('');
      i = -1;
      resultSum = 0;
    }
  }
  // console.log(resultSum);

  return resultSum;
}
digitalRoot(2);
digitalRoot(16);
digitalRoot(942);
digitalRoot(132189);
digitalRoot(493193);

//! ----------------------------------------------❤ best_decision N1: Balkoth❤-----------------------------------------------------
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }

//! ----------------------------------------------best_decision N2: ryandsouza-----------------------------------------------------
// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n
//       .toString()
//       .split('')
//       .reduce(function (acc, d) {
//         return acc + +d;
//       }, 0),
//   );
// }

//! ----------------------------------------------best_decision N3: v02468-----------------------------------------------------
// function digital_root(n) {
//   if (n < 10) return n;

//   for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
//     sum += Number(n[i]);

//   return digital_root(sum);
// }
