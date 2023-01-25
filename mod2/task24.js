//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно. Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція (індекс).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

//! ----------------------------------------------Рішення:-----------------------------------------------------
function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  console.log(fruits.includes(fruit));

  return fruits.includes(fruit);
}

checkFruit('plum');
checkFruit('mandarin');
checkFruit('pear');
checkFruit('Pear');
checkFruit('apple');

// console.log(total);
