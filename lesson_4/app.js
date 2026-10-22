console.log("lesson 4");

// Array - массивы

let points = [10, 10, 8];

console.log("Count:", points.length);

points.push(5, 6);

// [10 10 8 5 6 ? ? 9]
points[7] = 9;

console.log("Count:", points.length);

points[5] = 8;
points[6] = 9;

console.log("За первый урок получено " + points[0] + " баллов");

console.log("За восьмой урок получено " + points[7] + " баллов");

console.log("За двенадцатый урок получено " + (points[11] ?? 0) + " баллов");

// let testArray = [];
// testArray[100] = null;
// console.log(testArray.length);

let totalPoints = 0;

// for..of

for (let lesson of points) {
  // totalPoints = totalPoints + lesson;
  totalPoints += lesson;
}

console.log("Итоги месяца (баллы): ", totalPoints);
console.log(points.join(" + ") + " = " + totalPoints);

let visits = [1, 1, 1, "online", "online", 0, "online", 1];
let totalVisits = 0;

for (let visit of visits) {
  if (visit === "online") {
    visit = 1;
  }
  totalVisits += visit;
}
console.log("Итоги месяца (посещения): ", totalVisits);

// for (цикл со счетчиком)

for (let i = 0; i < visits.length; i++) {
  let message = "";

  switch (visits[i]) {
    case 1:
      message = "был";
      break;
    case "online":
      message = "был онлайн";
      break;
    case 0:
      message = "не был";
      break;
  }

  console.log("На " + (i + 1) + " уроке студент " + message);
}

let magicNumber = 7;
for (let i = 1; i <= 10; i++) {
  console.log(magicNumber + " * " + i + " = " + magicNumber * i);
}
// 8 * i
// 8 * 1 = 8
// 8 * 2 = 16
// 8 * 3 = 24
///

let lessons = [];

for (let i = 1; i <= 9; i++) {
  if (i === 9) {
    lessons.push("Доп. Урок");
  } else {
    lessons.push("Урок №" + i);
  }
}
console.log(lessons);

for (let lesson of lessons) {
    let div = document.createElement("div");
    div.innerText = lesson;
    div.className = "block"
    document.body.appendChild(div);
}


console.clear();

console.log("Points:", 5);
console.log("Points:" + 5);


