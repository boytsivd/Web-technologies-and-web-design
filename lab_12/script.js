// ЗАВДАННЯ 1
let x = 1;
let y = 2;

y = '2'
let res1 = x + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = 'true' + y;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x != y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x * "String";
console.log(res4); // NaN
console.log(typeof res4); // "number"

// ЗАВДАННЯ 2
let num = prompt("Введи число");
console.log(num % 2 == 0); //Перевіряє чи число є парним
console.log(num == 7); //Перевіряє чи число є кратним 7

//ЗАВДАННЯ 3
let age = prompt("Скільки вам років ?"); 
let  isAdult = (age >= 18) ? "Ви досягли повнолітнього віку" : "Ви ще надто молодий"; 
console.log(isAdult);

//ЗАВДАННЯ 4
let a = parseInt(prompt("1 сторона трикутника"));
let b = parseInt(prompt("2 сторона трикутника"));
let c = parseInt(prompt("3 сторона трикутника"));

let s = (a + b + c) / 2;
let p = Math.sqrt( s * (s - a) * (s - b) * (s - c) );

console.log(p.toFixed(3));

//ЗАВДАННЯ 5
var currDay = new Date();
var dayTime = currDay.getHours();

if (dayTime < 5){
    console.log("Ніч");
} else if (dayTime < 11){
    console.log("Ранок");
} else if (dayTime < 17){
    console.log("День");
} else if (dayTime < 23){
    console.log("Вечір");
}

   

