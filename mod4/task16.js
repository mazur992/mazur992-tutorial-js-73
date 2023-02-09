//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

// масив.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });
// У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses.Кілька студентів можуть відвідувати один і той самий предмет.
// Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map(student => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Він викликає колбек - функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив.
// Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці(одна вкладеність).Цей розгладжений масив і є результатом роботи flatMap().

//! ----------------------------------------------завдання---------------------------------------------------

//todo: Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()

//! ----------------------------------------------Рішення---------------------------------------------------------------------
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism'],
  },
];

const genres = books.flatMap(book => book.genres);

console.log(genres);

// console.log(pointer);
