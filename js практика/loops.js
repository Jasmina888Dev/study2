// Тапшырма 1: Сандарды чыгарыңыз1ден 10го чейин сандарды консольго чыгаруучу код жазыңыз.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// Тапшырма 2: Жуп жана так сандар0дон 20га чейинки жуп сандарды бир жолу, анан так сандарды дагы бир жолу чыгарыңыз.
// for (let i = 2; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// Тапшырма 3: Массив элементтериБерилген массивдин элементтерин консольго чыгарыңыз:
// let arr = ["jasi", "jasmin", "jasmina"];
// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }

// Тапшырма 4: Строканы тескери чыгарууБерилген текстти (мисалы: "JavaScript") тескери чыгаруучу код жазыңыз.
// let str = "JavaScript";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }
// Тапшырма 5: Массивдеги сандарды кошууБерилген массивдеги сандарды кошуп, жыйынтыгын консольго чыгарыңыз:
// let arr = [2, 3, 5, 7, 3, 2, 34];
// let red = 0;
// for (let i = 0; i < arr.length; i++) {
//   red += arr[i];
// }
// console.log(red);

// Тапшырма 6: Факториал эсептөөБерилген сан үчүн факториалды эсептей турган
// программа жазыңыз (мисалы, 5! = 5 × 4 × 3 × 2 × 1 = 120).
// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result *= i;
// }
// console.log(result);

// Тапшырма 7: Катуу сандарды табуу1ден 100гө чейинки катуу сандарды
//  (ар бир цифрасынын суммасы ошол сандын бөлүгү болгон сандар) табыңыз.
// let num = 0;
// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0) {
//     num++;
//     console.log(i);
// }
// }
// console.log(num);

// Тапшырма 8: Баш тамгаларды чыгарыңыз Берилген массивдеги ар
//  бир сөздүн башкы тамгасын консольго чыгарыңыз:
// let arr = ["jasi", "jasmin", "jasmina"];
// for (let i = 0; i < arr.length; i++) {
//   let = result = arr[i];

//   }

// Берилген массивдин элементтерин бир-бирден консольго чыгаруучу код жаз
// let fruits = ["apple", "banana", "cherry", "date"];
// for (let i = 0; i < fruits.length; i++) {
// }
// console.log(fruits[0]);
// console.log(fruits[1]);
//   console.log(fruits[2]);
//   console.log(fruits[3]);

// Берилген сөздүн (string) ар бир символун (тамгасын) консольго чыгарыңыз
// let word = "hello";
// for (let i = 0; i < word.length; i++) {}
// console.log(word[0]);

// 1ден 10го чейинки сандардын квадратынын (i × i) жыйынтыгын консольго чыгарыңыз.
// let result = 0;
// for (let j = 1; j <= 10; j++) {
//   result = j ** 2;
//   console.log(result);
// }

// Берилген массивден тек гана жуп сандарды консольго чыгарыңыз
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let w =0; w < numbers.length; w++) {
//   if (numbers[w] % 2 === 0) {
//     console.log(numbers[w]);
//   }
// }

// Берилген массивдин элементтерин тескери тартипте чыгаруучу код жаз.
// const numbers = [10, 20, 30, 40, 50];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// Берилген сан үчүн факториалды эсептеген код жаз
// let n = 4;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result *= n;
// }
// console.log(result);

// Берилген сүйлөмдүн ар бир сөзүн тескери жазган код жаз
// let sentence = "Hello world!";
// for (let i = sentence.length - 1; i >= 0; i--) {

//   console.log(sentence[i]);
// }

// Массивдеги кайталанган элементтерди алып салып, уникалдуу элементтерди гана чыгарыңыз
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// function task(num) {
//   return num.reduce((acc, el) => {
//     if (!acc.includes(el))
//       acc.push(el)
//     return acc
//   }, [])
// }
// console.log(task(numbers));

// Маселе: 5 жолу "Hello, JavaScript!" дегенди консольго чыгарыңыз.
// let str = "Hello, JavaScript!";
// for (let i = 1; i <= 5; i++) {
//   console.log("Hello, JavaScript!");
// }

// 2 санынын көбөйтүү таблицасын консольго чыгарыңыз (1ден 10го чейин)
// let num = 2;
// for (let i = 1; i < 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

// Берилген массивди циклин колдонуп консольго чыгарыңыз
// let numbers = [10, 20, 30, 40, 50];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i].toString());
// }

// 7. "FizzBuzz" маселеси
// Маселе:
// 1ден 30га чейинки сандарды текшериңиз:

// Эгер сан 3кө бөлүнсө, "Fizz" деп чыгарыңыз.
// Эгер сан 5ке бөлүнсө, "Buzz" деп чыгарыңыз.
// Эгер сан 3кө да, 5ке да бөлүнсө, "FizzBuzz" деп чыгарыңыз.
// Болбосо, жөн гана санды чыгарыңыз.
// for (let i = 1; i < 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Берилген массивди тескери тартипте чыгарыңыз
// let fruits = ["apple", "banana", "cherry", "date"];
// for (let i = fruits.length - 1; i > 0; i--) {
//   console.log(fruits[i]);
// }

// Берилген текстти символдорун тескери тартипте чыгарыңыз.
// let text = "JavaScript";
// for (let i = text.length - 1; i >= 0; i--) {
//   console.log(text[i]);
// }

// Берилген текст палиндромбу (солдон жана оңдон окулганда бирдейби) текшерип, жыйынтыгын чыгарыңыз
// let text = "madam";
// let reverse = "";
// for (let i = text.length - 1; i > 0; i--) {
//   reverse += text[i];
// }
// if (reverse === text) {
//   console.log("ooba");
// } else {
//   console.log("jok");
// }





