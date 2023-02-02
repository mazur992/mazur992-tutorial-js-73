//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const indexOldName = this.potions.indexOf(oldName);
    this.potions.splice(indexOldName, 1, newName);
  },
};

atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
console.log(atTheOldToad.potions);
