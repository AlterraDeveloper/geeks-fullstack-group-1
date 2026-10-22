console.log("Мой второй шаг в Full Stack");


// http://localhost:5500/lesson_1/
// http://127.0.0.1:5500/lesson_1/
// http://127.0.0.1:5500/lesson_1/app.html
// V8 - интерпретатор JavaScript


// keywords  - ключевые слова

// переменные

// var let const
// camel case 

let myFriendPhoneNumber = "+996 500 121212" // string
let amount = 15000 // number
let clientFee = amount * 0.01;
let totalAmount = amount - clientFee;
let comment = null // null 

let mySurname = "Kiselev"
let myName = "Evgeniy"
let myFatherName = "Dmitrievich";


let mbankName = myName + " " + mySurname[0] + ".";
console.log(mbankName);

let optimaBankName = myName[0] + "." + myFatherName[0] + "." + mySurname[0];
console.log(optimaBankName);

let demirBankName = mySurname.slice(0,3) + "*** " + 
                    myName.slice(0,3) + "*** " + 
                    myFatherName.slice(0,3) + "***";
console.log(demirBankName);

console.log("-".repeat(20));
console.log("Номер получателя: " + myFriendPhoneNumber);
console.log("Имя получателя: " + mbankName);
console.log("Сумма пополнения: " + amount);
console.log("Комиссия: " + clientFee);
console.log("К зачислению: " + totalAmount);
console.log("-".repeat(20));


let myAge = 18;
myAge = 100;







