//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
//* ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

//! ----------------------------------------------Рішення:-----------------------------------------------------
function findLongestWord(string) {
  let arrayString = string.split(' ');
  let longestWord = '';

  for (let i = 0; i < arrayString.length; i += 1) {
    // if (longestWord.length < arrayString[i].length) {
    //   longestWord = arrayString[i];
    // }

    longestWord =
      longestWord.length < arrayString[i].length
        ? (longestWord = arrayString[i])
        : longestWord;
  }
  console.log(longestWord);
  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');

// console.log(total);
