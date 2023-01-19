//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ПЕРЕВІРКА СПАМУ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true
//! ----------------------------------------------Рішення---------------------------------------------------------------------

function checkForSpam(message) {
  let result;

  // if (
  //   message.toLowerCase().includes('spam') ||
  //   message.toLowerCase().includes('sale')
  // ) {
  //   result = true;
  // } else {
  //   result = false;
  // }
  result =
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
      ? true
      : false;
  console.log(result);

  return result;
}

// console.log(message);

checkForSpam('Latest technology news');
checkForSpam('JavaScript weekly newsletter');
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('Trust me, this is not a spam message');
checkForSpam('Get rid of sPaM emails. Our book in on sale!');
checkForSpam('[SPAM] How to earn fast money?');
