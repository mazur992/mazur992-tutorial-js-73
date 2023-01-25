//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.
//  В іншому випадку функція повинна повернути новий масив повністю.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

//! ----------------------------------------------Рішення:-----------------------------------------------------
function makeArray(firstArray, secondArray, maxLength) {
  let totalLength = firstArray.length + secondArray.length;
  let newArray = firstArray.concat(secondArray);

  if (totalLength <= maxLength) {
    console.log(newArray);
    return newArray;
  }
  console.log(newArray.slice(0, maxLength));

  return newArray.slice(0, maxLength);
}

makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);
