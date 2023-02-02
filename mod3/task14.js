//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

//! ----------------------------------------------завдання---------------------------------------------------

//todo: Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

//! ----------------------------------------------Рішення---------------------------------------------------------------------

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }
  for (const key of Object.keys(object)) {
    propCount += 1;
  }
  console.log(propCount);

  return propCount;
  // Change code above this line
}
countProps({});
countProps({ name: 'Mango', age: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// console.log(values);
