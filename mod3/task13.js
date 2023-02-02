//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

//! ----------------------------------------------завдання---------------------------------------------------

//todo:Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних
//todo: властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);
