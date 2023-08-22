//Завдання 1. 
"use strict";
// let text_1_1 = prompt('Введіть перший текст...');
// let text_1_2 = prompt('Введіть другий текст...');
// console.log(`Завдання 1.\n${Math.sign(text_1_1.length - text_1_2.length)}`);

//Завдання 2. 
// let text_2 = prompt('Введіть текст...');
// console.log(`Завдання 2.\n${text_2.split("").reverse().join("")}`);

//Завдання 3.
let inputP = prompt('Введіть слово. Подивимось чи є воно паліндромом?');
let finalWord = inputP.split('').reverse().join('');
if (inputP === finalWord) {
  console.log(`${inputP} є паліндромом.`);
} else {
  console.log(`${inputP} не є паліндромом.`);
}
//Завдання 4.