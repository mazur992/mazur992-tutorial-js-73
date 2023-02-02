//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

//! ----------------------------------------------Рішення---------------------------------------------------------------------

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propNameValues = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      propNameValues.push(product[propName]);
    } else {
      break;
    }
  }
  console.log(propNameValues);
  return propNameValues;
}

getAllPropValues('name');
getAllPropValues('quantity');
getAllPropValues('price');
getAllPropValues('category');

// console.log(rgbColors);
