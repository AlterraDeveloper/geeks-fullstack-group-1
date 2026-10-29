// ECMA Script (ES) 5 ES5, ES6+
// JavaScript (JS)

// Функции

// 1. Function declaration - определение функции

// falsy - false, undefined, null, 0, NaN, ""

function sayHello(userName = "пользователь") {
  // userName = userName || "пользователь"
  console.log("Hello, " + userName);
  return 0;
}

sayHello("Evgeniy");
sayHello("group 1");
sayHello();

function convertMoney(amount, rate) {
  console.log(amount / rate);
  console.log(Math.round(amount / rate));
  console.log((amount / rate).toFixed(2));
}

convertMoney(150_000, 87);
convertMoney(87, 150_000);

// debugging


function showSpaces(text) {
  let textWithSpaces = "";
  for (const symbol of text) {
    // if (symbol === " ") {
    //   textWithSpaces += "·";
    // } else {
    //   textWithSpaces += symbol;
    // }
    textWithSpaces += symbol === " " ? "·" : symbol;
  }
  return textWithSpaces;
}

console.log("Hello,                    ");
console.log(showSpaces("Hello,                    "));
console.log("          Hello, user");
console.log(showSpaces("          Hello, user"));

// 2. Function expression - функциональное выражение

console.log("Бонусы с 200 сом (0) =>", getGlobusBonus(200)); // 0
console.log("Бонусы с 930 сом (9) =>", getGlobusBonus(930)); // 9
console.log("Бонусы с 2250 сом (44) =>", getGlobusBonus(2250)); // 44
console.log("Бонусы с 5922 сом (177) =>", getGlobusBonus(5922)); // 177

const getGlobusBonus = (amount) => {
// function getGlobusBonus(amount) {
    // 800 - 1999 => 1 b
    // 2000 - 4999 => 2 b
    // 5000+ => 3 b

    if(amount < 800){
        return 0;
    }

    const hundreds = Math.trunc(amount / 100);

    if(amount >= 800 && amount <= 1999){
        return hundreds;
    }

    if(amount >= 2000 && amount <= 4999){
        return hundreds * 2;
    }

    // if(amount >= 5000){
        return hundreds * 3;
    // }
}








