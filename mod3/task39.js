//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив ["Speed potion", Stone skin"]
// Після другого виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив ["Stone skin"]
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const indexRemovePotion = this.potions.indexOf(potionName);
    this.potions.splice(indexRemovePotion, 1);
  },
};

atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.potions);

atTheOldToad.removePotion('Speed potion');
console.log(atTheOldToad.potions);
