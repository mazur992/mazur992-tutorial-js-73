//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості.
// Наприклад, у нас є група студентів з балами за тест.Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів,
// і за ім'ям студента.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author),
);
console.log('sortedByAuthorName: ', sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author),
);
console.log('sortedByReversedAuthorName: ', sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
console.log('sortedByAscendingRating: ', sortedByAscendingRating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
console.log('sortedByDescentingRating: ', sortedByDescentingRating);
