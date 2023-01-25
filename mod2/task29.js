//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
//* ЗАДАЧА: ПАРНІ ЧИСЛА
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

//! ----------------------------------------------Рішення:-----------------------------------------------------
function getEvenNumbers(start, end) {
  const newArray = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  console.log(newArray);
  return newArray;
}

getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 7);

// console.log(total);