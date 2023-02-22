//* WeIrD StRiNg CaSe
//! ----------------------------------------------task---------------------------------------------------

// Write a function toWeirdCase(weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each
// word upper cased, and all odd indexed characters in each word lower cased.The indexing just explained is zero based, so the zero - ith index
// is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' ').Spaces will only be present if there are multiple words.
// Words will be separated by a single space(' ').
//! ----------------------------------------------example:-----------------------------------------------------

// toWeirdCase('String'); //=> returns "StRiNg"
// toWeirdCase('Weird string case'); //=> returns "WeIrD StRiNg CaSe"

//! ----------------------------------------------my_decision:-----------------------------------------------------

function toWeirdCase(string) {
  let newArray = [];
  let newString = [];

  const arrayStrings = string.split(' ');

  for (const arrayString of arrayStrings) {
    for (let i = 0; i < arrayString.length; i += 1) {
      if (i % 2 === 0) {
        newString.push(arrayString[i].toUpperCase());
        continue;
      }
      newString.push(arrayString[i]);
    }
    newArray.push(newString.join(''));
    newString = [];
  }
  return newArray.join(' ');
}

console.log(toWeirdCase('weird string case'));
//! ----------------------------------------------❤ best_decision N1: pmdartus❤-----------------------------------------------------
function toWeirdCase(string) {
  return string
    .split(' ')
    .map(function (word) {
      return word
        .split('')
        .map(function (letter, index) {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}

//! ----------------------------------------------best_decision N2: GerhardH-----------------------------------------------------
function toWeirdCaseCharacter(chr, index) {
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word) {
  return word.split('').map(toWeirdCaseCharacter).join('');
}

function toWeirdCase(string) {
  return string.split(' ').map(toWeirdCaseWord).join(' ');
}

//! ----------------------------------------------best_decision N3: Beast-----------------------------------------------------
function toWeirdCase(string) {
  return string.replace(/(\w{1,2})/g, m => m[0].toUpperCase() + m.slice(1));
}
