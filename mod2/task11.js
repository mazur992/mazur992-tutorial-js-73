//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС
//! ----------------------------------------------завдання---------------------------------------------------

//todo:Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

//! ----------------------------------------------Рішення:-----------------------------------------------------
function calculateEngravingPrice(message, pricePerWord) {
  const messageArray = message.split(' ');
  console.log(messageArray.length * pricePerWord);

  return messageArray.length * pricePerWord;
}

calculateEngravingPrice('JavaScript is in my blood', 10);
calculateEngravingPrice('JavaScript is in my blood', 20);
calculateEngravingPrice('Web-development is creative work', 40);
calculateEngravingPrice('Web-development is creative work', 20);

// console.log(firstTwoElements);
