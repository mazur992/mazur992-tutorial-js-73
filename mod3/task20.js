//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      console.log(product.price * product.quantity);

      return product.price * product.quantity;
    }
  }
  console.log(0);

  return 0;
}

calculateTotalPrice('Blaster');
calculateTotalPrice('Radar');
calculateTotalPrice('Droid');
calculateTotalPrice('Grip');
calculateTotalPrice('Scanner');

// console.log(rgbColors);
