//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

// Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);
// Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок.
//   Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик.
// Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

//! ----------------------------------------------Рішення---------------------------------------------------------------------

function deliverPizza(pizzaName) {
  console.log(`Delivering ${pizzaName} pizza.`);

  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

// console.log(pointer);
makeMessage('Royal Grand', makePizza);
makeMessage('Ultracheese', deliverPizza);
