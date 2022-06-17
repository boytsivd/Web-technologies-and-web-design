// ЗАВДАННЯ 2 - Вивід тексту в консоль
console.log("Бойців Дмитро олегович");

// ЗАВДАННЯ 3
var num1 = 896;
var num2 = 346;
num2 = num1;

// Виводить в документ
document.write ("Число №1: ", num1, " Число №2: ", num2);

// ЗАВДАННЯ 4 - Типи даних
// Тип string представляє рядки, тобто дані, узяті в лапки
var string = "String це рядок";
// Логічні типи даних True/false Так або ні
var boolean = true;
var boolean = false;
//Числа
var number = 213;
// Нульове значення
var n = 23;
n = null;
// Невизначене значення
var x = 777;
x = undefined;

// ЗАВДАННЯ 5   
var isAdult = confirm("Вам є 18 років ?");
console.log(isAdult);

// ЗАВДАННЯ 6
var name = "Дмитро"; //Тип String
var surname = "Бойців"; //Тип String
var studyGroup = true; //Тип Boolean
var age = 21 //Тип Number
var g

console.log (typeof name);
console.log (typeof studyGroup);
console.log (typeof age);
console.log (typeof g);
console.log (typeof n); //в консолі браузеру як object

//ЗАВДАННЯ 7
var nickname = prompt("Вкажіть ваш nickname");
var mail = prompt("Вкажіть ваш e-mail");
var password = prompt("Вкажіть ваш пароль");

var hh = confirm("Ваш нікнейм: " + nickname + " e-mail: " + mail + " пароль: " + password);

//ЗАВДАННЯ 8

var minute = prompt("Скільки Хвилин");
var hour = prompt("Скільки годин")
var day = prompt("Скільки Днів");
var month = prompt("Скільки Місяців");
console.log ("Сикунд в хвилині: ", minute * 60, " В годині: ", hour * 3600, " В дні: ", day * 86400, " В місяці: ", month * 2592000);
