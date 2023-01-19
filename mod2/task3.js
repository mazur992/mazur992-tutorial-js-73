//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: СКЛАД ТОВАРІВ 3.0
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

function checkStorage(available, ordered) {
  if (ordered === 0) {
    console.log('Your order is empty!');

    return 'Your order is empty!';
  } else if (ordered > available) {
    console.log('Your order is too large, not enough goods in stock!');

    return 'Your order is too large, not enough goods in stock!';
  }
  console.log('The order is accepted, our manager will contact you');

  return 'The order is accepted, our manager will contact you';
}
// console.log(productName);

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);
