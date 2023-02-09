//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Функція може приймати довільну кількість колбеків. Наприклад, уявімо, що ми пишемо логіку прийняття дзвінків для телефону.
// Програма повинна увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в іншому випадку. Доступність абонента будемо імітувати генератором випадкового числа, щоб між різними викликами функції можна було отримати різні результати.

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Mango");
// Проблема такого підходу полягає у тому, що функція processCall робить занадто багато і прив'язує перевірку доступності абонента до двох заздалегідь визначених дій. Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму?

// Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання, робити перевірки і виконувати потрібний код. Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.

// Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);
// Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів на сервер, виконання
// заздалегідь невідомих функцій тощо.У цьому і полягає їх суть - це функції, призначені для відкладеного виконання.

//! ----------------------------------------------завдання---------------------------------------------------

//todo: Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError,
//   передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess,
//   передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError) повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError) повертає "Error! There is no pizza with a name Vienna in the assortment."
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`,
      );
    } else {
      return onSuccess(pizzaName);
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  console.log(`Error! ${error}`);
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pointer);
