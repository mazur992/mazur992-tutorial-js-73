//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Метод every(callback) перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// масив.every((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає true, якщо всі елементи масиву задовольняють умову.
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
// Перебирання масиву припиняється, якщо колбек повертає false.
// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// При роботі з масивом об'єктів перевіряється значення якоїсь їх властивості.
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Використовуючи метод every(), доповни код таким чином, щоб:
// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна eachElementInFirstIsEven
// Значення змінної eachElementInFirstIsEven - це буль true
// Оголошена змінна eachElementInFirstIsOdd
// Значення змінної eachElementInFirstIsOdd - це буль false
// Оголошена змінна eachElementInSecondIsEven
// Значення змінної eachElementInSecondIsEven - це буль false
// Оголошена змінна eachElementInSecondIsOdd
// Значення змінної eachElementInSecondIsOdd - це буль true
// Оголошена змінна eachElementInThirdIsEven
// Значення змінної eachElementInThirdIsEven - це буль false
// Оголошена змінна eachElementInThirdIsOdd
// Значення змінної eachElementInThirdIsOdd - це буль false
// Для перебирання масивів використаний метод every()

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
console.log('eachElementInFirstIsEven: ', eachElementInFirstIsEven);
const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);
console.log('eachElementInFirstIsOdd: ', eachElementInFirstIsOdd);

const eachElementInSecondIsEven = secondArray.every(
  element => element % 2 === 0,
);
console.log('eachElementInSecondIsEven: ', eachElementInSecondIsEven);
const eachElementInSecondIsOdd = secondArray.every(
  element => element % 2 !== 0,
);
console.log('eachElementInSecondIsOdd: ', eachElementInSecondIsOdd);

const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
console.log('eachElementInThirdIsEven: ', eachElementInThirdIsEven);
const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);
console.log('eachElementInThirdIsOdd: ', eachElementInThirdIsOdd);
