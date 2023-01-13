//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
// Оператор return використовується для передачі значення з тіла функції у зовнішній код. Коли інтерпретатор зустрічає return, він відразу ж виходить з функції (припиняє її виконання), і повертає вказане значення у те місце коду, де функція була викликана.

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550
// Оператор return без явно вказаного значення повертає спеціальне значення undefined. За відсутності return у тілі функції, вона все одно поверне undefined.
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція add(a, b, c)
// У функції add є оператор return
// Виклик add(15, 27, 10) повертає 52
// Виклик add(10, 20, 30) повертає 60
// Виклик add(5, 10, 15) повертає 30
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

//! ----------------------------------------------Рішення---------------------------------------------------------------------

function add(a, b, c) {
  return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
