// Июль июль ИЮЛЬ 7
// function declaration
function getSeason(month) {
  month = String(month).toLowerCase();

  if (month === "март" || month === "апрель" || month === "май") {
    return "весна";
  }

  if (month === "июнь" || month === "июль" || month === "август") {
    return "лето";
  }

  if (month === "сентябрь" || month === "октябрь" || month === "ноябрь") {
    return "осень";
  }

  if (month === "декабрь" || month === "январь" || month === "февраль") {
    return "зима";
  }

  return null;
}

// function expression

const getSeason_v2 = (month) => {
  month = String(month).toLowerCase();

  switch (month) {
    case "март":
    case "апрель":
    case "май":
      return "весна";

    case "июнь":
    case "июль":
    case "август":
      return "лето";

    case "сентябрь":
    case "октябрь":
    case "ноябрь":
      return "осень";

    case "декабрь":
    case "январь":
    case "февраль":
      return "зима";
  }
};

const currentSeason = getSeason("ноябрь");

console.log(currentSeason);

// if (currentSeason === "осень") {
//   document.body.style.backgroundColor = "orange";
// }

// Алгоритм Луна

// 4125 4512 7845 8965
// 5 9 5 => X
// 6 8 4 => Y

// 6 * 2 = 12 = 1 + 2 = 3
// 8 * 2 = 16 = 1 + 6 = 7

function validateCard(cardNumber) {
  // 1234 1234 1234 1234

  const firstGroup = []; // 4 2 4 2 4 2 4 2
  const secondGroup = []; // 3 1 3 1 3 1 3 1

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    if (i % 2 > 0) {
      firstGroup.push(Number(cardNumber[i]));
    } else {
      secondGroup.push(Number(cardNumber[i]));
    }
  }

//   console.log(firstGroup);
//   console.log(secondGroup);

  let firstGroupSum = 0;
  for(const x of firstGroup){
    firstGroupSum += x;
  }

  console.log("First sum = ", firstGroupSum); // 24

  let secondGroupSum = 0;
  for(const x of secondGroup) {
    const doubleX = x * 2;
    if(doubleX >= 10){
        secondGroupSum += (doubleX - 9);
    } else {
        secondGroupSum += doubleX;
    }
  }

  console.log("Second sum = ", secondGroupSum); // 32

  const totalSum = firstGroupSum + secondGroupSum;

  return totalSum % 10 === 0;
}

console.log(validateCard("1234123412341234"));
console.log(validateCard("4177490176843011"));
console.log(validateCard("4177490176242404"));




// KISS - Keep It Simple Stupid

