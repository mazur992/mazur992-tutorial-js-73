//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex, і повертає новий рядок.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція getSubstring(string, length)
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"
// Виклик функції getSubstring("Hello world", 8) повертає "Hello wo"
// Виклик функції getSubstring("Hello world", 11) повертає "Hello world"
// Виклик функції getSubstring("Hello world", 0) повертає ""
//! ----------------------------------------------Рішення---------------------------------------------------------------------

function getSubstring(string, length) {
  const substring = string.slice(0, length);
  console.log(substring);

  return substring;
}

// console.log(message);
getSubstring('Hello world', 3);
getSubstring('Hello world', 6);
getSubstring('Hello world', 8);
getSubstring('Hello world', 11);
getSubstring('Hello world', 0);
