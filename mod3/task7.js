//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті, вона буде створена.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

//! ----------------------------------------------завдання---------------------------------------------------

//todo: Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

console.log(apartment);
