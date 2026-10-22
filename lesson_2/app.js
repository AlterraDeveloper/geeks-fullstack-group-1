var myBankCard; // hoisting

// Типы данных
// 1. number числа
// 2. string строки
// 3. null
// 4. undefined
// 5. boolean логический
// 6. object объект
// ------
// 7. BigInt
// 8. Symbol

console.log("My bank card: " + myBankCard);

myBankCard = "1234 1234 1234 1234";

let myName = "Evgeniy";
let mySurname = "Kiselev";
let myLastName = `Dmitrievich`;

var myBalance = 15_000;
// myBalance = null;
let isBlocked = true;
let isMain = false;

// операторы сравнения: > < >= <= == != === !==
// логические операторы: && || !

let amount = prompt("Укажите сумму пополнения");
// console.log("Тип данных переменной amount:" + typeof amount);

amount = Number(amount);

if (isBlocked) {
  console.error("КАРТА В БЛОКЕ!");
}

// if(isMain == false){
if (!isMain) {
  console.warn("КАРТА НЕ ЯВЛЯЕТСЯ ОСНОВНОЙ");
}

if (amount > 0 && amount <= 50_000 && !isBlocked && isMain) {
  myBalance = myBalance + amount;
} else {
    console.warn("ПОПОЛНЕНИЕ НЕУСПЕШНО")
}

// concatenation - конкатенация
// myBalance = myBalance + Number(amount);

console.log("My balance: " + myBalance);

let carNumber = "01 KG 023 ABC";

let checkNumber = carNumber[6];

if (checkNumber == "1" || checkNumber == "2") {
  console.log("МОЖНО В: Понедельник, Суббота, Воскресенье");
} else if (checkNumber == "3" || checkNumber == "4") {
  console.log("МОЖНО В: Вторник, Суббота, Воскресенье");
} else if (checkNumber == "5" || checkNumber == "6") {
  console.log("МОЖНО В: Среда, Суббота, Воскресенье");
} else if (checkNumber == "7" || checkNumber == "8") {
  console.log("МОЖНО В: Четверг, Суббота, Воскресенье");
} else if (checkNumber == "9" || checkNumber == "0") {
  console.log("МОЖНО В: Пятница, Суббота, Воскресенье");
}
