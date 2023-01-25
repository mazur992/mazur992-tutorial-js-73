//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
//* ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

//! ----------------------------------------------Рішення:-----------------------------------------------------
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }
  for (const iterator of numbers) {
    if (iterator > value) {
      filteredNumbers.push(iterator);
    }
  }

  console.log(filteredNumbers);

  return filteredNumbers;
  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

// console.log(total);
