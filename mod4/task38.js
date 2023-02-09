//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

// Сортує і змінює вихідний масив.
// Повертає змінений масив, тобто посилання на відсортований вихідний.
// За замовчуванням сортує за зростанням.
// Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
// Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// students.sort();
// console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ["A", "B", "C", "a", "b", "c"]
// Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();
console.log('ascendingReleaseDates: ', ascendingReleaseDates);

const alphabeticalAuthors = [...authors].sort();
console.log('alphabeticalAuthors: ', alphabeticalAuthors);

console.log('releaseDates: ', releaseDates);
console.log('authors: ', authors);
