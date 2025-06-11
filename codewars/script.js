// function typeValidation(num, el) {
//   return typeof num === el
// }
// console.log(typeValidation(42, "Number"));
// console.log(typeValidation(42, "number"))

// function validName(names) {
//   if (names.length === 0) {
//     return "You must test at least one name.";
//   }
//   if (names.length === 1) {
//     return "Congratulations, you can choose any name you like!";
//   }
//   for (let i = 0; i < names.length - 1; i++) {
//     let str1 = names[i].trim().slice(-1).toLowerCase();
//     let str2 = names[i + 1].trim()[0].toLowerCase();
//     if (str1 !== str2) {
//       return "Back to the drawing board, your baby names are not compatible.";
//     }
//   }
//   return "Congratulations, your baby names are compatible!";
// }

// console.log(validName(["Suri", "Ireland", "Diva", "AleF"]));
// console.log(validName(["Suri", "Michael", "Diva", "AleF"]));
// console.log(validName(["Liam"]));
// console.log(validName([]));

// function pooRoulette(p) {}

// console.log(
//   pooRoulette([
//     ["o", "o", "o", "o", "o", "o", "o"],
//     ["o", "~", "o", "o", "o", "o", "o"],
//     ["o", "~", "o", "o", "o", "o", "o"],
//     ["o", "~", "o", "o", "o", "o", "o"],
//     ["o", "B", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o"],
//     ["o", "o", "o", "o", "o", "o", "o"],
//   ]),
// );

// console.log(String.fromCharCode(97));

// ----------------------------------------------------------

// let str = 97
// console.log(CharCode(str));
// let arr = [70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72];
// console.log(arr.map((n) => String.fromCharCode(n)).join(""));

// const ArrowFunc = function (arr) {
//   return arr.map((el) => String.fromCharCode(el)).join("");
// };

// console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));

// const ArrowFunc = (arr) => String.fromCharCode(...arr);

// var ArrowFunc = (arr) => String.fromCharCode.apply(String, arr);

// let rooms = {
//   first: {
//     description: "This is the first room",
//     items: {
//       chair: "The old chair looks comfortable",
//       lamp: "This lamp looks ancient",
//     },
//     second: {
//       description: "This is the second room",
//       items: {
//         couch: "This couch looks like it would hurt your back",
//         table: "On the table there is an unopened bottle of water",
//       },
//     },
//   },
// };

//  ---------------------------------------------------------------------

//  =====================================

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(evenOrOdd(0));

// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";

// }
//   ===============

//=================
// function arrayMadness(a, b) {
//   let sum = a.reduce((acc, el) => el ** 2 + acc , 0)
//   let sum1 = b.reduce((acc, el) => el ** 3 + acc , 0)
//   if (sum > sum1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
//==============

// function task(array) {
//   return array.map((el) =>
//     Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el * el
//   );
// }

// console.log(task([4, 3, 9, 7, 2, 1, 25]));

// =========================
// function multiTable(n) {
//   let res = "";
//   for (let i = 1; i <= 10; i++) {
//     res += `${i} * ${n} = ${i * n}\n`;
//   }
//   return res.trim();
// }
// console.log(multiTable(1));

// function multiTable(n) {
//   let result = "";
//   for (let i = 1; i <= 10; i++) {
//     result += `${i} * ${n} = ${i * n}\n`;
//   }
//   return result.trim();
// }
// console.log(multiTable(1));

// \n деген эмнени билдирет?

// \n — бул жаңы сап (newline) белгиси.

// Түшүндүрмө:
// Программалоодо \n символу текстти жаңы сапка (жолго) өткөрүү үчүн колдонулат.

// Мисалы, төмөнкү код:

// =========================================

// function all(arr, fun) {
//   return arr.every(fun);
// }
// console.log(
//   all([1, 2, 3, 4, 5], function (v) {
//     return v < 9;
//   })
// );

// =======================================================
// Сиздин милдет
// Логикалык маанилердин массивин жана логикалык операторду эске алуу менен, операторду массивдеги маанилерге ырааттуу колдонуунун негизинде логикалык натыйжаны кайтарыңыз.

// Мисалдар
// логикалык = [True, True, False], оператор ="AND"
// True AND True ->True
// True AND False->False
// кайтууFalse
//
// логикалык = [True, True, False], оператор ="OR"
// True OR True ->True
// True OR False->True
// кайтууTrue
//
// логикалык = [True, True, False], оператор ="XOR"
// True XOR True ->False
// False XOR False->False
// кайтууFalse
//
// Киргизүү
// буль баалуулуктарынын массивдери(1 <= array_length <= 50)
// логикалык операторду көрсөткөн сап: "AND", "OR","XOR"
//
// Чыгуу
// Логикалык маани ( Trueже False).
// ============================================================
// function logicalCalc(array, op) {

// }

// function logicalCalc(array, op) {
//   if (op === "AND") {
//     return array.reduce((a, b) => a && b);
//   } else if (op === "OR") {
//     return array.reduce((a, b) => a || b);
//   } else if (op === "XOR") {
//     return array.reduce((a, b) => a !== b);
//   }
// }

// console.log(logicalCalc([true, true, false], "AND"));
// console.log(logicalCalc([true, true, false], "OR"));
// console.log(logicalCalc([true, true, false], "XOR"));

// function findNeedle(haystack) {
//   let res = haystack.indexOf("needle");
//   return `found the needle at position ${res}`;
// }

// console.log(
//     findNeedle([
//       "hay",
//       "junk",
//       "hay",
//       "hay",
//       "moreJunk",
//       "needle",
//       "randomJunk",
//     ])
// );

// function drawStairs(n) {
//   for (let i = 0; i < 3; i++) {
//     return " ".repeat(i) + "I";
//   }
// }
// console.log(drawStairs("I"));

// function drawStairs(n) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += " ".repeat(i) + "I\n";
//   }

//   return result.trim();
// }

// console.log(drawStairs(3));

// function integrate(n) {
//   let res = "";
//   for (let i = 0; i < n; i++) {
//     res += " ".repeat(i) + "I\n";
//   }
//   return res.trim();
// }
// console.log(integrate(5));

// function makeUpperCase(str) {
//   return str.toUpperCase()
// }

// console.log(makeUpperCase("hello"));
// console.log(makeUpperCase("Hello"));
// console.log(makeUpperCase("HELLO"));

// function task(num) {}

// console.log(task(1450000));
// console.log(task(10000));
// console.log(task(9780000));
// console.log(task(50020000));

// function findAverage(nums) {
//   return nums.reduce((acc, el) => {
//   return acc + el / nums.length
//   }, 0);
// }
// console.log(findAverage([1, 3, 5, 7]));

// function eachCons(array, n) {

//   }

// console.log(eachCons([1, 2, 3, 4], 2));
// function eachCons(arr, n) {
//     return arr.map((_, i) => arr.slice(i, i + n)).filter(sub => sub.length === n);
// }

// function eachCons(array, n) {
//   let cascadingSubset = [];
//   for (i = 0; i <= array.length - n; i++) {
//     console.log(array[i]);

//     cascadingSubset.push(array.slice(i, i + n));
//   }
//   return cascadingSubset;
// }
// console.log(eachCons([1, 2, 3, 4, 7], 2));
// console.log(eachCons([1, 2, 3, 4], 3));

// var arr = ["a", "b", "c", "d", "e"];
// function first(arr, n) {
//   let str = [];
//   if (n === 0) {
//     return str;
//   } else if (n === undefined) {
//     return arr.slice(0, 1);
//   } else {
//     return arr.slice(0, n);
//   }
// }
// console.log(first(arr));

// Напишите функцию checkTask(input), которая принимает в переменную input строку
//  и возвращает ее в виде нумеронима.
// К примеру, если в параметр input передали данную строку:
// Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый
//  - То тогда тебе - сюда!
// Функция должна возвратить такой результат:
// С5й п2ь у п11, Т4о г2е - не б3, Е2и в4л п2ь т7й - То т3а т2е - с3!
// т.е. каждое слово, если оно длинее 4х букв, превращается в нумероним, первую
//  и последнюю букву нужно оставить,
// а между ними, буквы заменить числом - количеством букв по середине.

// function task(str) {
//   let res = str.split(" ");

//   res[0]} + res.length;

// }
// console.log(
//   task(
//     "Сложный путь у программиста Только горе - не беда, Если выбрал путь тернистый- То тогда тебе - сюда!"
//   )
// );

// let str =
//   "Сложный путь у программиста Только горе - не беда, Если выбрал путь тернистый- То тогда тебе - сюда!";
// let res = str.split(" ");
// let arr = res
//   .map((el) => {
//     if (el.length === 1) {
//       return el;
//     } else {
//       return `${el[0]}${el.slice(1, -1).length}${el.slice(-1)}`;
//     }
//   })
//   .join(" ");

// console.log(arr);

//  return `${el[0]}${el.length}${el.slice(-1)}`;

// function stairsIn20(s) {
//   let num = s.reduce((acc, el) => acc + el, 0);
//   return num * 20;
// }

// console.log(
//   stairsIn20([
//     6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
//     7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
//     6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
//     5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
//     9871, 5990, 6309, 7825,
//   ])
// );

// function twoSort(s) {
//   return s.sort()[0].split("").join("***");
// }

// console.log(
//   twoSort([
//     "BTC",
//     "BTC",
//     "Bitcoin",
//     "Bitcoin",
//     "Dash",
//     "Dogecoin",
//     "Dogecoin",
//     "Ethereum",
//     "Ethereum",
//     "Lisk",
//     "Lisk",
//     "Mine",
//     "ProofOfWork",
//     "ProofOfWork",
//     "ProofOfWork",
//     "Ripple",
//     "Steem",
//   ])
// );

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );

//  let num = sum[0].split("").join("***");
//  return num.split(" ").sort((d, c) => {
//    return c - d;
//  });

// function addLength(str) {
//   return str.split(" ").map((el) => {
//     return el + " " + el.length;
//   });
// }

// console.log(addLength("Testing for apple ban"));

// function maps(x) {
//   return x.map((el) => el * 2);
// }

// console.log(maps([1, 2, 3]));

// function findAverage(array) {
//   let num = array.length;
//   return array.reduce((acc, el) => {
//     let sum = acc + el;
//     return sum / num;
//   }, 0);
// }

// console.log(findAverage([1, 2, 3, 4]));

// function check(a, x) {
//   return a.find((el) => {
//     let res = x.split(" ");
//     if (el === res) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// console.log(check([101, 45, 75, 105, 99, 107], 107));

// function removeEveryOther(arr) {
//   return arr.filter((_, idx) => idx % 2 === 0);
// }

// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// function sumTwoSmallestNumbers(numbers) {
//   return numbers
//     .sort((a, b) => {
//       return a - b;
//     })
//     .slice(0, 2).reduce((acc, el) => {
//       return acc + el
//     }, 0)
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// function drawW(height) {
//   if (height < 2) return [];

//   const result = [];
//   const width = 3 * (height - 1) + 1;

//   for (let i = 0; i < height; i++) {
//     let line = Array(width).fill(" ");

//     line[i] = "*";
//     line[height - 1 - i] = "*";
//     line[height - 1 + i] = "*";
//     line[3 * (height - 1) - i] = "*";

//     result.push(line.join(""));
//   }

//   return result;
// }

// console.log(drawW(3));

// function scrabbleScore(str) {
//   return str.split(" ").reduce((acc, el) => {
//     if (el === " ") {
//       return acc;
//     } else if (el === "С") {
//       return acc + 3;
//     } else if (el === "А") {
//       return acc + 1;
//     } else if (el === "В") {
//       return acc + 3;
//     } else if (el === "Г") {
//       return acc + 2;
//     }  else if (el === " Э") {
//       return acc+ 1
//     }
//     else
//     {
//       return acc + el.length;
//     }
//   }, 0);
// }

// console.log(scrabbleScore("st re  Г          et"));

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// function pernicious(n) {
//   if (n <= 0) return "No pernicious numbers";

//   n = Math.floor(n); // калкыманы тегеректеп алуу

//   const result = [];

//   for (let i = 1; i <= n; i++) {
//     const binary = i.toString(2); // экиликке айландыруу
//     const ones = binary.split("1").length - 1; // "1" сандарынын саны
//     if (isPrime(ones)) {
//       result.push(i);
//     }
//   }

//   return result.length ? result : "No pernicious numbers";
// }

// function positiveSum(arr) {
//   return arr.reduce((acc, el) => {
//     if (el >= 1) {
//       return acc + el
//     } else {
//       return acc
//     }
//   }, 0)
// }

// console.log(positiveSum([1,2,3,4,5]));
// function monkeyCount(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(monkeyCount(5));



console.log("hello");
console.log("hi");





[async function name(params) {
 let res = await axios("jhuygegfjmklbhgtfgtyjbhcf")
  console.log("malymat kele elek");
}]

setTimeout(() => {
  
}, 2000);






function name(params) {
  iojuhytrdewaetfhuj
}


