//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];
// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.З цією метою ми відсортуємо копію масиву методом sort(),
//   після чого методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна
//  тільки для зберігання проміжного результату.

// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки.Кожний наступний метод буде виконуватися на
// основі результату роботи попереднього.

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// Робимо копію вихідного масиву перед сортуванням.
// На копії викликаємо метод sort().
// До результату роботи методу sort() застосовуємо метод map().
// Змінній names присвоюється результат роботи методу map().
// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
// На результаті методу filter() викликаємо sort().
// Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
// Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2 - 3 операцій.По - перше, перебираючі методи
// використовуються для порівняно простих операцій над колекцією.По - друге, виклик кожного наступного методу - це додаткове перебирання
// масиву, що за великої кількості, може позначитися на продуктивності.
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort
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
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(({ rating }) => rating >= MIN_BOOK_RATING)
  .map(({ author }) => author)
  .sort((a, b) => a.localeCompare(b));
console.log('names: ', names);
