// 1. Number
// 2. String
// 3. null
// 4. undefined
// 5. boolean

let userAge = Number(prompt("Укажите свой возраст"));
let userSex = Number(prompt("Укажите свой пол: 1 - Женский, 2 - Мужской"));
// userAge = Number(userAge)

let manPassed = userSex === 2 && userAge >= 21;
let womanPassed = userSex === 1 && userAge >= 18;

if (womanPassed || manPassed) {
  console.log("✅ Face control passed");
  console.log(
    "Вы " + (userSex === 1 ? "девушка" : "парень") + "(" + userAge + ")",
  );

  //   if (userSex === 1) {
  //     console.log("Вы девушка (" + userAge + ")");
  //   } else {
  //     console.log("Вы парень (" + userAge + ")");
  //   }
} else {
  console.warn(
    "❌ К сожалению вы не проходите. У нас действуют правила: парни 21+, девушки 18+",
  );
}

// if (userSex === 1 && userAge >= 18) {
//   console.log("✅ Face control passed");
// } else if (userSex === 2 && userAge >= 21) {
//   console.log("✅ Face control passed");
// } else {
//     console.warn("❌ К сожалению вы не проходите. У нас действуют правила: парни 21+, девушки 18+");
// }

// DRY  - Don't repeat yourself
// Refactoring - рефакторинг

// if (userAge >= 18) {
//   console.log("✅ Face control пройден");
// } else {
//   console.warn("❌ К сожалению вы не проходите, возраст должен быть 18+");
// }

// тернарный оператор: условие ? значение_1 : значение_2

let myCity = null;

console.log("Ваш город ", myCity === null ? "не определен" : myCity);

let userPhoto; // undefined

// userPhoto = getFromServer();

let bankCard = prompt("Введите номер банковской карты") ?? "";
let paymentSystemMarker = Number(bankCard[0]);

switch (paymentSystemMarker) {
  case 2:
    console.log("У вас МИР");
    break;
  case 4:
    console.log("У вас ВИЗА");
    break;
  case 5:
    console.log("У вас МАЭСТРО");
    break;
  case 9:
    console.log("У вас ЭЛКАРТ");
    break;
  default:
    console.log("Номер карты не распознан");
}

if (paymentSystemMarker === 4) {
  console.log("У вас VISA");
} else if (paymentSystemMarker === 9) {
  console.log("У вас Элкарт");
} else if (paymentSystemMarker === 5) {
  console.log("У вас MasterCard/Maestro");
} else if (paymentSystemMarker === 2) {
  console.log("У вас МИР");
} else {
  console.log("Номер карты не распознан");
}
