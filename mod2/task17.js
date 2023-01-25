//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Цикли використовуються для багаторазового повторення коду. Оголошення циклу for складається з трьох виразів.

// for (Ініціалізація; Умова; Пост - вираз) {
//   // Тіло циклу
// }
// Ініціалізація - виконується один раз перед початком циклу. Використовується для створення змінної-лічильника і встановлення її початкового значення.
// Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
// Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови. Використовується для оновлення змінної-лічильника.
// Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується (його тіло) доти, доки i <= 20, тобто умова приводиться до true. Після кожної ітерації лічильник збільшується на 5.
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

//! ----------------------------------------------Рішення:-----------------------------------------------------
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}