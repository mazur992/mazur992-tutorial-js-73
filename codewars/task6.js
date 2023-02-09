//* Find the odd int
//! ----------------------------------------------task---------------------------------------------------

//todo:  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

//! ----------------------------------------------example:-----------------------------------------------------

//! ----------------------------------------------my_decision:-----------------------------------------------------

function solution(number) {
  let total = 0;
  if (number === 0 || number < 0) {
    return total;
  }
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }
  console.log(total);
  return total;
}

solution(10);

//! ----------------------------------------------❤ best_decision N1: jhoffner❤-----------------------------------------------------
// function solution(number) {
//   var sum = 0;

//   for (var i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

//! ----------------------------------------------best_decision N2: user9274097-----------------------------------------------------
// function solution(number) {
//   var sum = 0;
//   for (var i = 3; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

//! ----------------------------------------------best_decision N3: anvatar-----------------------------------------------------
function solution(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter(n => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}
