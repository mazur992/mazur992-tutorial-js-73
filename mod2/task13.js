//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ГЕНЕРАТОР SLUG
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

//* Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

//! ----------------------------------------------Рішення:-----------------------------------------------------
function slugify(title) {
  let slug = title.toLowerCase().split(' ').join('-');
  console.log(slug);
  return slug;
}

slugify('Arrays for begginers');
slugify('English for developer');
slugify('Ten secrets of JavaScript');
slugify('How to become a JUNIOR developer in TWO WEEKS');

// console.log(firstTwoElements);
