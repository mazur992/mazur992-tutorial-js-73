//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками.
// Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок,
// змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(lowToday);
console.log(highToday);
console.log(todayIcon);

console.log(lowTomorrow);
console.log(highTomorrow);
console.log(tomorrowIcon);
