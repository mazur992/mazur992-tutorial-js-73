//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const accessType = book.public ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, public, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = public ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// Деструктуризація завжди знаходиться у лівій частині операції присвоєння.Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. Якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоювання,
// в іншому випадку їй буде присвоєно undefined.Порядок оголошення змінних у фігурних дужках не важливий.
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature).
// Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
