//* Count the number of Duplicates
//! ----------------------------------------------task---------------------------------------------------

//todo:  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric
//todo:  digits that occur more than once in the input string. The input string can be assumed
//todo:  to contain only alphabets(both uppercase and lowercase) and numeric digits.

//! ----------------------------------------------example:-----------------------------------------------------

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//! ----------------------------------------------my_decision:-----------------------------------------------------

function countNumberDuplicates(string) {
  let compareStr = string.toLowerCase();
  let count = 0;

  while (compareStr.length > 1) {
    let compareEl = compareStr[0];
    compareStr = compareStr.slice(1);
    // console.log(compareStr);

    if (compareStr.includes(compareEl)) {
      compareStr = compareStr.replaceAll(compareEl, '');
      // console.log(compareStr);

      count += 1;
    }
  }
  console.log(count);
}

countNumberDuplicates('abcde');
countNumberDuplicates('aabbcde');
countNumberDuplicates('aabBcde');
countNumberDuplicates('indivisibility');
countNumberDuplicates('Indivisibilities');
countNumberDuplicates('aA11');
countNumberDuplicates('ABBA');

// console.log(productName);

//! ----------------------------------------------❤ best_decision N1: jacobb ❤-----------------------------------------------------

// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('')
//       .match(/([^])\1+/g) || []
//   ).length;
// }

//! ----------------------------------------------best_decision N2: glalev-----------------------------------------------------
// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split('')
//     .filter(function (val, i, arr) {
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

//! ----------------------------------------------best_decision N3: Ninjer-----------------------------------------------------
// function duplicateCount(text) {
//   var lower = text.toLowerCase();
//   var count = 0;
//   var used = [];

//   lower.split('').forEach(function (letter) {
//     if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
//       count++;
//       used.push(letter);
//     }
//   });

//   return count;
// }
