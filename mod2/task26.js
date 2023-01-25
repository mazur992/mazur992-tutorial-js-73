//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
// Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло цикла
// }
// variable - змінна, яка буде зберігати значення елемента на кожній ітерації
// iterable - колекція, яка містить ітерабельні елементи, наприклад масив
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

//! ----------------------------------------------Рішення:-----------------------------------------------------
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }
  for (const variable of order) {
    total += variable;
  }

  // Change code above this line
  console.log(total);

  return total;
}

calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([]);

// console.log(total);
