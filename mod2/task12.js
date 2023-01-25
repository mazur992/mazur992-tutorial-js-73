//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

//! ----------------------------------------------Рішення:-----------------------------------------------------
function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  console.log(string);

  return string;
}
makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
makeStringFromArray(['top', 'picks', 'for', 'you'], '_');

// console.log(firstTwoElements);
