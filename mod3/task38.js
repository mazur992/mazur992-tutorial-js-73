//! -----------------------------------------------ТЕОРІЯ-----------------------------------------------------------

//* ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ
//! ----------------------------------------------завдання---------------------------------------------------

//todo: Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
//! ----------------------------------------------Тести:-----------------------------------------------------

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// Після другого виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
//! ----------------------------------------------Рішення---------------------------------------------------------------------

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

atTheOldToad.addPotion('Invisibility');
console.log(atTheOldToad.potions);
atTheOldToad.addPotion('Power potion');
console.log(atTheOldToad.potions);
