//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, які будуть присвоєні тільки у разі, коли в об'єкті відсутня властивість з таким ім'ям.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"
//! ----------------------------------------------завдання---------------------------------------------------

//todo: У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
// Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

console.log(yesterday);
console.log(today);
console.log(tomorrow);
console.log(icon);

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
