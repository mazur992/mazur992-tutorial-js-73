//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------
//* ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ 2.0
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits.
// Delivery(<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Виклик makeOrderMessage(2, 100, 50) повертає "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Виклик makeOrderMessage(4, 300, 100) повертає "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Виклик makeOrderMessage(10, 70, 200) повертає "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."

//! ----------------------------------------------Рішення---------------------------------------------------------------------

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  console.log(
    `You ordered droids worth ${
      orderedQuantity * pricePerDroid + deliveryFee
    } credits. Delivery (${deliveryFee} credits) is included in total price.`,
  );
  // Change code above this line
  // return message;
}

makeOrderMessage(5, 100, 10);
