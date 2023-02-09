//* Split Strings
//! ----------------------------------------------task---------------------------------------------------

// Complete the solution so that it splits the string into pairs of two characters.If the string contains an
// odd number of characters then it should replace the missing second character of the final pair with an underscore('_').
//! ----------------------------------------------example:-----------------------------------------------------

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
//! ----------------------------------------------my_decision:-----------------------------------------------------

function solution(str) {
  const newArray = [];

  let count = 0;

  if (str.length % 2 === 1) {
    for (let i = 0; i < str.length; i += 2) {
      if (i === str.length - 1) {
        newArray[count] = str[i] + '_';
        break;
      }

      newArray[count] = str[i] + str[i + 1];
      count += 1;
    }
  }

  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
      newArray[count] = str[i] + str[i + 1];
      count += 1;
    }
  }

  return newArray;
}
solution('abc');
// solution('abcdef');

// console.log(productName);

//! ----------------------------------------------❤ best_decision N1: myjinxin2015 ❤-----------------------------------------------------
// function solution(s) {
//   return (s + '_').match(/.{2}/g) || [];
// }

//! ----------------------------------------------best_decision N2: phirephoenix-----------------------------------------------------
// function solution(str) {
//   var i = 0;
//   var result = new Array();
//   if (str.length % 2 !== 0) {
//     str = str + '_';
//   }
//   while (i < str.length) {
//     result.push(str[i] + str[i + 1]);
//     i += 2;
//   }
//   return result;
// }

//! ----------------------------------------------best_decision N3: mynewvk-----------------------------------------------------
// function solution(str) {
//   arr = [];
//   for (var i = 0; i < str.length; i += 2) {
//     second = str[i + 1] || '_';
//     arr.push(str[i] + second);
//   }
//   return arr;
// }
