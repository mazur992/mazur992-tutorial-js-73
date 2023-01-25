//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

//! ----------------------------------------------Рішення:-----------------------------------------------------
function getExtremeElements(array) {
  const firstTwoElements = [];
  firstTwoElements[0] = array[0];
  firstTwoElements[1] = array[array.length - 1];
  console.log(firstTwoElements);

  return firstTwoElements;
}
getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(['Earth', 'Mars', 'Venus']);
getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// console.log(firstTwoElements);
