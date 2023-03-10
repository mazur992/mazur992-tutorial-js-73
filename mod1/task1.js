//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

// Змінні використовуються для зберігання даних. У кожної змінної є ідентифікатор (назва змінної). Значення кожної змінної зберігається в оперативній пам'яті.
// Змінну можна уявити як коробку з написом (ім'я змінної), в якій щось знаходиться (значення змінної).
// <ключове слово> <назва змінної> = <значення>
// Оголошення змінної починається з ключового слова const. Така змінна має бути одразу ініціалізована початковим значенням, і такій змінній не можна надати інше значення після її ініціалізації.

//! Увага
// Створення змінної без ключового слова const призведе до помилки.

// const age = 20;
// const userName = 'Mango';
// const socialProfileTag = '@gluck';
// const totalWorkerSalary = 4052;

// JavaScript назва змінної записується в camelCase-нотації.
// Перше слово пишеться маленькими буквами, а кожне наступне починається з великої. Назви змінних чутливі до регістру, тобто user, usEr і User - це різні змінні.

//! ----------------------------------------------завдання---------------------------------------------------

//todo: Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:

// назва - рядок "Droid";
// ціна за штуку - число 2000.

//! ----------------------------------------------Тести:-----------------------------------------------------

//* Оголошена змінна productName
//* Значення змінної productName - це рядок "Droid"
//* Оголошена змінна pricePerItem
//* Значення змінної pricePerItem - це число 2000

const productName = 'Droid';
const pricePerItem = 2000;

console.log(pricePerItem);
console.log(productName);
