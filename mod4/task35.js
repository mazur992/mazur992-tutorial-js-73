//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
// Наприклад, у нас є масив студентів з балами за тест.Необхідно отримати середній бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу.

// Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce(
  (total, { playtime, gamesPlayed }) => (total += playtime / gamesPlayed),
  0,
);
console.log('totalAveragePlaytimePerGame: ', totalAveragePlaytimePerGame);
