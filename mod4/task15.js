//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.

//! ----------------------------------------------завдання---------------------------------------------------

//todo: Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція

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

const titles = books.map(book => book.title);
console.log(titles);

// console.log(pointer);
