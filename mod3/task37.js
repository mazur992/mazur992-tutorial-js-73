//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    console.log(this.potions);
    return this.potions;
  },
};

atTheOldToad.getPotions();

// console.log(atTheOldToad.potions);
