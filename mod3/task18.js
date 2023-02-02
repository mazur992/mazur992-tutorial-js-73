//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      console.log(product.price);

      return product.price;
    }
  }
  console.log(null);

  return null;
}

getProductPrice('Radar');
getProductPrice('Grip');
getProductPrice('Scanner');
getProductPrice('Droid');
getProductPrice('Engine');

// console.log(rgbColors);
