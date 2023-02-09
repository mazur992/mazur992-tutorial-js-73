//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
// Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()

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
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
console.log('bookWithTitle: ', bookWithTitle);
const bookByAuthor = books.find(({ author }) => author === AUTHOR);
console.log('bookByAuthor: ', bookByAuthor);
