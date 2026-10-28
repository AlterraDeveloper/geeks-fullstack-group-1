let points = [5, 5, 4, 4, 3, 3, 4, 5, 2, 3];

let geeksPoints = [];

// for of

for (const point of points) {
  // const geeksPoint = point * 2;
  geeksPoints.push(point * 2);
}

let univerPoints = [];

for (const point of points) {
  univerPoints.push(point * 20);
}

console.log("In school:", points);
console.log("In Geeks:", geeksPoints);
console.log("In university:", univerPoints);

let financeOps = [];

financeOps[0] = 150_000;
financeOps[1] = -25_000;
financeOps[2] = -3000;

financeOps.push(-5000, 14000, -4000);

console.log("За текущий месяц совершено операций:", financeOps.length);

// let test = prompt("Работает только в браузере")

let incomes = [];
let expenses = [];
let totalIncomes = 0;
let totalExpenses = 0;

for (const op of financeOps) {
  if (op > 0) {
    incomes.push(op);
    totalIncomes += op;
  } else {
    expenses.push(Math.abs(op));
    totalExpenses += Math.abs(op);
  }
}

console.log("Доходы:", incomes, "Итого:", totalIncomes);
console.log("Расходы:", expenses, "Итого:", totalExpenses);




// let houseRooms = 3;
// let houseOwnerContact = "996 555 112233";
// let houseSquare = 85;
// let houseText = "ПРОДАЮ!!! СРОЧНА!!!";
// let housePrice = 90_000;
let houseHasInsuarance = true;
// let houseAddress = "г.Бишкек, проспект Чуй, 95, кв.14";
// let houseLevel = "4 / 9";
let houseHasFurniture = false;
let houseDesignType = "Euro";
let houseSelling = true;

let house = {
    price: 90_000,
    contact: "996 555 14 14 14",
    address: "г.Бишкек, проспект Чуй, 95, кв.14",
    rooms: 3,
    square: 85,
    level: "4 / 9",
    title: "ПРОДАЮ!!! СРОЧНА!!!",
    active: true,
};

let bankOperation  = {
    id: "8s908f90ew89f8ew98v90ew890v890ew80vwe",
    amount: 5000,
    sender: {
        id: "3242343",
        fullName: "Testov Test",
        accountNo: "11221000021354"
    },
    receiver: {
        id: "1484894",
        fullName: "Optima Bank Main Office",
        accountNo: "11111212131231231548"
    },
    comment: "Списание в счет кредита (№ договора 1451/4)",
    status: "success",
    date: "26.10.2026 15:33:14 GMT+6"
}




