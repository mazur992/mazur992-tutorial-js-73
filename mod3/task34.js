//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Досі ми розглядали об'єкти тільки як сховища взаємопов'язаних даних, наприклад, інформація про книгу тощо. Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.

// Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ["Останнє королівство", "Страж снів"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");
// Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними. Наприклад, можна було оголосити змінну books і дві функції getBooks() і addBook(bookName), але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.

// // ❌ Слабкопозв'язані, незалежні сутності
// const books = [];
// function getBooks() {}
// function addBook() {}
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт
// Значення властивості bookShelf.getBooks - це метод об'єкта
// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"
// Значення властивості bookShelf.addBook - це метод об'єкта
// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"
// Значення властивості bookShelf.removeBook - це метод об'єкта
// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"
// Значення властивості bookShelf.updateBook - це метод об'єкта
// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  // removeBook(bookName) {
  //   const { books } = this;
  //   for (let i = 0; i < books.length; i++) {
  //     if (books[i] === bookName) {
  //       books.splice(i, 1);
  //       console.log(`Deleting book ${bookName}`);
  //     }
  //   }
  // },
  // updateBook(oldName, newName) {
  //   const { books } = this;

  //   for (let i = 0; i < books.length; i++) {
  //     if (books[i] === oldName) {
  //       books.splice(i, 1, newName);
  //       console.log(`Updating book ${oldName} to ${newName}`);
  //     }
  //   }
  // },

  removeBook(bookName) {
    console.log(`Deleting book ${bookName}`);
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    console.log(`Updating book ${oldName} to ${newName}`);
    return `Updating book ${oldName} to ${newName}`;
  },
};

bookShelf.removeBook('The last kingdom');
bookShelf.updateBook('The guardian of dreams', 'dreams');

// console.log(finalSettings);
