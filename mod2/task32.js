//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
//* ЗАДАЧА: ФУНКЦІЯ INCLUDES()
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

//! ----------------------------------------------Рішення:-----------------------------------------------------
function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      console.log(true);
      return true;
    }
    if (i === array.length - 1 && array[i] !== value) {
      console.log(false);

      return false;
    }
  }
}

includes([1, 2, 3, 4, 5], 3);
includes([1, 2, 3, 4, 5], 17);
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
includes(['apple', 'plum', 'pear', 'orange'], 'plum');
includes(['apple', 'plum', 'pear', 'orange'], 'kiwi');

// console.log(total);
