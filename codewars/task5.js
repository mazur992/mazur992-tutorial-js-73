//* Split Strings
//! ----------------------------------------------task---------------------------------------------------

// Complete the solution so that it splits the string into pairs of two characters.If the string contains an
// odd number of characters then it should replace the missing second character of the final pair with an underscore('_').
//! ----------------------------------------------example:-----------------------------------------------------

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
//! ----------------------------------------------my_decision:-----------------------------------------------------

function solution(str) {
  console.log(str);
  const newArray = [];

  let count = 0;

  if (str.length % 2 === 1) {
    for (let i = 0; i < str.length; i += 2) {
      let name;
      if (i === str.length - 1) {
        name = str[i] + '_';
        console.log(name);

        newArray[count] = name.join('');
        break;
      }
      name = str[i] + str[i + 1];
      console.log(name);

      // newArray[count] = name.join('');
      count += 1;
    }
  }

  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i += 2) {
      newArray[count] = [str[i] + str[i + 1]];
      count += 1;
    }
  }
  // let newArray2 = [];
  // for (let i = 0; i < newArray.length; i++) {
  //   newArray.push();
  // }

  console.log(newArray);
  console.table(newArray);
  return newArray;
}
solution('abc');
// solution('abcdef');

// console.log(productName);

//! ----------------------------------------------❤ best_decision N1:  ❤-----------------------------------------------------

//! ----------------------------------------------best_decision N2: -----------------------------------------------------

//! ----------------------------------------------best_decision N3: -----------------------------------------------------
