// loops - цикл - бул 1 нерсе кайра кайра кайталанса ошону цикл деп коёт.
// цикл - for(начало; условия; шаг;) for 3 болуктон турат

// console.log(arr);
// var arr = 1   // undefined ======== констинг

// функциянын 3 туру бар
// function task() {
// =========   диспекшн
// }

// const  ======== experection

// => колбек функция

// increment ++ : +1
// dicrement -- : -1

// for (let i = 20; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let arr = [22, 33, 45, 5, 43];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 1. Выведите столбец чисел от 1 до 50.
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю
// элементами X с помощью цикла.

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for
//  выведите все эти элементы в консоль.

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for
//  найдите произведение элементов этого массива.

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// for (let i = 0; i < 100; i++) {

//     console.log(i);
// }

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите
// сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8];
// let result = 0;
// for (let j = 0; j < arr.length; j++) {
//   result += arr[j];
// }
// console.log(result);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора
//  if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.
// let arr = [-19, 39, 64, -17, -16];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result += arr[i];
//   }
// }
// console.log(result);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла
// for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если
// есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 4, 6, 15, 3, 20];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("Есть!");
//   }
// }

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран
//  только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000];
// for (let i = 0; i < arr.length; i++) {
//     let jasi = String.arr[i];
//     if (jasi[0] === "1" || jasi[0] === "2" || jasi[0] === "5") {
//   console.log(jasi);
//     }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла
// for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// le

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления
// не станет меньше 50. Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let count = 0;
// for (let n = 1000; n > 50; n = n / 2) {
//   count++;
//   console.log(n, count);
// }

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое
//  его элементов (сумма элементов, делить на количество).
// Сизге [1, 2, 3, 7, 6, 9] сандары бар массив берилет. Орточо арифметикалык маанини табыңыз
// анын элементтери (элементтердин суммасы, санга бөлүнгөн)
// let arr = [1, 2, 3, 7, 6, 9];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i] / arr.length;
// }
// console.log(result);

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму
// квадратов элементов этого массива
// let arr = [1, 2, 3, 4, 5];
// let jasi = 0
// for (let i = 0; i < arr.length; i++) {
//     jasi += arr[i] ** 2
// }
// console.log(jasi);

// ==============================================================================
//  24.11.2024

// 1. Вывести числа от 1 до 10.
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 2. Вывести четные числа от 2 до 20.
// for (let i = 2; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3. Вывести нечетные числа от 1 до 15.
// for (let i = 1; i < 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 4. Найти сумму чисел от 1 до 100.
// let result = 0;
// for (let i = 1; i < 100; i++) {
//   result += i;
// }
// console.log(result);

// 5. Найти произведение чисел от 1 до 10.
// let result = 1;
// for (let i = 1; i < 10; i++) {
//   result *= i;
// }
// console.log(result);

// 6. Вывести числа от 10 до 1 в обратном порядке.
// for (let i = 10; i > 1; i++) {
//   console.log(i);
// }

// 7. Найти сумму всех чисел, кратных 5, от 1 до 50.
// let result = 0
// for (let i = 1; i < 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//         result += i;
//     }
// }
// console.log(result);

// 8. Вывести таблицу умножения числа 7 (от 7 × 1 до 7 × 10).
// let n = 7;
// for (let i = 1; i <= n; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }

// 9. Найти сумму квадратов чисел от 1 до 10.
// let result = 0;
// for (let i = 1; i < 10; i++) {
//   result += i ** 2;
//   console.log(result);
// }

// 10. Вывести все элементы массива. [2, 4, 6, 8, 10]
// let arr = [2, 4, 6, 8, 10];
// for (let i = 0; i < arr.length; i++) {}
// console.log(arr[i]);

// 11. Найти сумму всех элементов массива. [3, 7, 2, 9, 4]
// let arr = [3, 7, 2, 9, 4];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

// 12. Найти минимальный элемент в массиве. [12, 45, 3, 22, 18];
// let arr = [12, 45, 3, 22, 18];
// let min = arr[i];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// 13. Найти количество четных чисел в массиве. [5, 8, 13, 2, 10]
// let num1 = [5, 8, 13, 2, 10];
// for (let i = 0; i < num1.length; i++) {
//   if (num1[i] % 2 === 0) {
//     console.log(num1[i]);
//   }
// }
// 14. Вывести каждый символ строки по отдельности. "JavaScript"
// let str = "JavaScript";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// 15. Реверсировать строку. "coding"
// let str = "coding";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// 16. Сделать каждую вторую букву строки заглавной. "javascript"
// let str = "javascript";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i].toLowerCase();
//   }
// }
// console.log(result);

// ===========================================================================================================================
// 26.11.2024
// 1. Вывести числа от 1 до 10.
// let i = 0;
// while (i < 10) {
//     i++;
//   console.log(i);
// }
// 2. Вывести четные числа от 2 до 20.
// let i = 0;
// while (i < 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//     i++;
//   }
// }
// 3. Вывести нечетные числа от 1 до 15.
// let i = 0
// do {
//   console.log(i % 2 === 1);
//   i++
// } while (i < 15)
// 4. Найти сумму чисел от 1 до 100.
// let i = 0;
// let result = 0;
// while (i < 100) {
//   result += i;
//   console.log(result);
//   i++;
// }
// 5. Найти произведение чисел от 1 до 10.
// let res = 1;
// let i = 1;
// while (i < 10) {
//   res = res * i;

//   i++;
// }
// console.log(res);

// 6. Вывести числа от 10 до 1 в обратном порядке.
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

// 7. Найти сумму всех чисел, кратных 5, от 1 до 50.
// let i = 0
// while (i < 50) {
//   i++
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
// 8. Вывести таблицу умножения числа 7 (от 7 × 1 до 7 × 10).
// let i = 1;
// let n = 7;
// do {
//   console.log(`${n} * ${i} = ${n * i}`);
//   i++;
// } while (i <= n);

// 9. Найти сумму квадратов чисел от 1 до 10.
// let i = 1;
// let res = 0;
// while (i < 10) {
//   res += i ** 2;
//   console.log(res);
//   i++;
// }
// 10. Вывести все элементы массива. [2, 4, 6, 8, 10]
// let arr = [2, 4, 6, 8, 10];
// let i = 0;
// do {
//   console.log(arr[i]);
//   i++;
// } while (i < arr.length);
// 11. Найти сумму всех элементов массива. [3, 7, 2, 9, 4]
// let arr = [3, 7, 2, 9, 4];
// let i = 0;
// let res = 0;
// while (i < arr.length) {
//   res += arr[i];
//   i++;
// }
// console.log(res);

// 12. Найти минимальный элемент в массиве. [12, 45, 3, 22, 18];
// let arr = [12, 45, 3, 22, 18];
// let min = arr[0]
// let i =0
// do {
//        if (arr[i] < min) {
//     min = arr[i]; }
//     i++
//   } while (i < arr.length)
//     console.log(min);

// 13. Найти количество четных чисел в массиве. [5, 8, 13, 2, 10]
// let arr = [5, 8, 13, 2, 20, 10];
// let i = 0;
// while (i < arr.length) {
//   i++;
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 14. Вывести каждый символ строки по отдельности. "JavaScript"
// let arr = "JavaScript";
// let i = 0
// do {
//   console.log(arr[i]);
//   i++
// } while (i < arr.length)
// 15. Реверсировать строку. "coding"
// while (i < str.length) {

// }
// 16. Сделать каждую вторую букву строки заглавной. "javascript"
// let str = "javascript";
// let result = "";
// let i = 0;
// while (i < str.length) {
//   if (i % 2 !== 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i].toLowerCase();
//   }
//   i++;
// }
// console.log(result);

// =================================================
// практика 27.11.2024

// 1. Выведите столбец чисел от 1 до 50.
// let i = 0;
// while (i < 50) {
//   i++;
//   console.log(i);
// }

// 2. Создайте переменную с пустым массивом, заполните массив
// 10-ю элементами X с помощью цикла.
// let arr = [];
// let i = 0;
// do {
//   arr.push("X");
//   i++;
// } while (i < 10);
// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла
//  for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7];
// let i = 0;
// while (i <= arr.length) {
//     console.log(arr[i]);
//   i++;
// }
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for
// найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2];
// let res = 1;
// let i = 0;
// do {
//   res *= arr[i];
//   console.log(res);
//   i++;
// } while (i < arr.length);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// let i = 0
// while (i < 100) {
//   if (i % 2 === 0) {
//       console.log(i);
//     }
//     i++;
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let i = 0;
// let res = 0;
// do {
//   res += i;
//   console.log(res);
//   i++;
// } while (i < 100);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите
// сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8];
// let result = 0;
// let i = 0;
// while (i < arr.length) {
//   result += arr[i];
//   i++;
// }
// console.log(result);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if
//  выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5];
// let i = 0;
// do {
// if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
// }
//     i++;
// } while (i < arr.length);

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
//  Найдите сумму положительных элементов массива.
// let arr = [ 941,45,78,-45,-85,-25]
// let i = 0
// let res = 0
// while (i < arr.length) {
//     if (arr[i] > 0) {
//         res += arr[i]
//     console.log(res);
//     }
//     i++
// }

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for
// и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите
//  на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 4,6, 15, 3, 20];
// let i = 0;
// do {
//   if (arr[i] === 4) {
//     console.log("Есть!");
//   }
//   i++;
// } while (i < arr.length);
// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только
//  те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000];
// let res = 0;
// let i = 0;
// while (i < arr.length) {
//   res = arr[i].toString();
//   if (res[0] === "1" || res[0] === "2" || res[0] === "5") {
//     console.log(res);
//   }
//   i++;
// }
// console.log(res);

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С
// помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// do {
//   arr[i].push("-");
//   console.log(arr.length);
//   i++;
// } while (i < arr.length);
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не
// станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого
// (итерация - это проход цикла), и запишите его в переменную num.
// let i = 1000;
// let cout = 0;
// while (i > 50) {
//   n = i / 2;
//   cout++;
//   console.log(i);
// }

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 6, 9];
// let res = 0;
// let i = 0;
// while (i < arr.length) {
//   res += arr[i] * arr.length;
//   i++;
//   console.log(res);
// }

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива
// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// let i = 0;
// do {
//   res += arr[i] ** 2;
//   i++;
//   console.log(res);
// } while (i < arr.length);

// ====================================================================================
// 1.12.2024

// 0. Задачи с break:
// 1. Найти первое число, которое делится на 7 в диапазоне от 1 до 50.

// 2. Остановить цикл, если текущее число из массива больше 100.
// 3. Пройтись по строке и остановиться, когда найдется первый символ "a"
// let str = "motion web it academy";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "a") {
//     break;
//   }
//   console.log(str[i]);
// }
// 4. В массиве из чисел найти первый отрицательный элемент.
// let arr = [45, -455, -47, 84];
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//     break;
//   }
//   i++;
// }
// 5. Проверить, содержит ли массив хотя бы одно четное число, и завершить цикл.
// let arr = [25, 35, 46, 57, 50, 46 ,52 ]
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//         break
//      }
// }

// 6. Вывести числа от 1 до 20, но завершить, если текущее число делится на 13.
// for (let i = 1; i < 20; i++) {
//   if (i % 13 === 0) {
//     console.log(i);
//     break;
//   }
// }
// 7. Пройтись по массиву строк и остановиться на первой строке, длина которой больше 5.
// let arr = ["asdfn", "tyvbhjnk", "ttdfghh"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length === 5) {
//       console.log(arr[i]);
//       break;
//     }
// }

// 0. Задачи с continue:
// 1. Вывести все числа от 1 до 50, пропуская числа, которые делятся на 5.
// for (let i = 1; i < 50; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// 2. Пройтись по массиву строк и вывести только строки, длина которых меньше 3.
// let arr = ["ad", "fgh", "trfghnuytfg"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length < 3) {
//     continue;
//   }
//   console.log(arr[i]);
// }
// 3. Из массива чисел вывести только нечетные.
// let arr = [40, 23, 67, 10, 20];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     continue;
//   }
//   console.log(arr[i]);
// }
// 4. Пропустить числа от 1 до 20, которые делятся на 2 и 3 одновременно.
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 0 || i % 3 === 0) {
//         continue
//     } console.log(i);
// }
// 5. Сгенерировать числа от 1 до 100, пропуская числа, кратные 7.
// for (let i = 1; i < 100; i++) {
//     if (i % 7 === 0) {
//         continue
//     } console.log(i);
// }
// 6. Пройтись по массиву чисел и вывести только те, которые больше 10.
// let arr = [13, 2, 3, 4, 5, 6,67];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 10) {
//     continue;
//   }
//   console.log(arr[i]);
// }
// 7. Из массива строк вывести только строки, которые содержат букву "e"
// let arr = ["dsjee", "uhsad", "svdcdsj"];
// let i = 0;
// while (i < arr.length) {
//   if (!arr[i].includes("e")) {
//     continue;
//   }
//   i++;
//   console.log(arr[i]);
// }

// Задача 1: break
// Маселе: Сизде сандардын тизмеси бар. Биринчи так санды тапкандан
// кийин издөө токтотулушу керек жана ошол санды басып чыгарыңыз.
// let num = [2, 4, 6, 8, 9, 12, 14]
// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 !== 0) {
//         console.log(num[i]);
//         break
//     }
// }

// Маселе: Сизде 1ден 10го чейинки сандардын аралыгы бар. Так сандарды өткөрүп жиберип, жуп сандарды басып чыгарыңыз
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//       continue;
//     }
//     console.log(arr[i]);
// }

// Задача 1: break менен
// Маселе:
// Берилген сандардын тизмесинде биринчи жолу экинин квадраттарына дал келген
// санды тапкандан кийин, циклди токтотуңуз жана анын индексин басып чыгарыңыз.
// let num = [5, 8, 16, 10, 4, 32, 25];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] === 4) {
//     break;
//   }
// }

// ---=--=-=-=-=-=--=--=---=-=-=-=-=-=-----=-=-=-=-=====-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=---==-=-====-=--=---====-===-==----====-=-=-=-=-=-=-----===
// 1.12.2024
// > Taalaibek Ymankulov:
// 1. Преобразование цен в другую валюту
// Описание: Преобразуйте массив цен в долларах в рубли (1 доллар = 100 рублей).
// const pricesInUSD = [10, 15, 20, 25];
// console.log(pricesInRUB); // [1000, 1500, 2000, 2500]
// let arr = [10, 15, 20, 25];
// let result = 100;
// for (let u = 0; u < arr.length; u++) {
//   result *= arr[u];
//   console.log(result);
// }

// 2. Отфильтровать совершеннолетних
// Описание: Верните массив только тех, кто старше 18 лет.
// console.log(adults); // [18, 21, 34, 19]
// let ages = [12, 17, 18, 21, 34, 15, 19];
// let arr = [];
// for (let j = 0; j < ages.length; j++) {
//   if (ages[j] >= 18) {
//     arr.push(ages[j]);
//   }
// }
// console.log(arr);

// 3. Получение имен пользователей
// Описание: Создайте массив только из имен.
// console.log(userNames); // ['Alice', 'Bob', 'Charlie']
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// function task(obj) {
//   obj.map((el) => {
//     console.log(el.name);
//   });
// }
// console.log(task(users));

// 4. Удаление товаров дешевле 100 рублей
// Описание: Удалите товары, у которых цена ниже 100 рублей.
// let products = [
//   { name: "Notebook", price: 50 },
//   { name: "Pen", price: 10 },
//   { name: "Backpack", price: 300 },
//   { name: "Eraser", price: 5 },
// ];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price < 100) {
//     continue;
//   } else {
//     console.log(products[i]);
//   }
// }

// console.log(expensiveProducts); // [{ name: 'Backpack', price: 300 }]

// 5. Добавить скидку к товарам
// Описание: Примените скидку 20% ко всем товарам.
// console.log(discountedProducts);

// const products = [
//   { name: "Shirt", price: 200 },
//   { name: "Pants", price: 400 },
//   { name: "Hat", price: 100 },
// ];
// for (let i = 0; i < products.length; i++) {
//   products[i].price *= 0.8;
// }
// console.log(products);

// 6. Подсчет общего количества товаров
// Описание: Подсчитайте общее количество всех товаров на складе.
// console.log(totalQuantity); // 23
// const inventory = [
//   { name: 'Shirt', quantity: 10 },
//   { name: 'Pants', quantity: 5 },
//   { name: 'Hat', quantity: 8 }
// ];
// let u = 0
// for (let i = 0; i < inventory.length; i++) {
//     u += inventory[i].quantity
// }
// console.log(u);

// 7. Проверка всех пользователей на возраст
// Описание: Убедитесь, что все пользователи старше 18 лет.
// console.log(allAdults); // true
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// for (let i = 0; i < users.length; i++) {
//   users.every((el) => {
//     console.log(el.age > 18);
//   });
// }

// 8. Преобразование массива в строку
// Описание: Преобразуйте массив имен в строку, разделенную запятыми.
// console.log(namesString); // 'Alice, Bob, Charlie'
// const names = ["Alice", "Bob", "Charlie"];
// console.log(names.join(","));

// 9. Разделение строки на массив
// Описание: Преобразуйте строку с именами в массив.
// console.log(namesArray); // ['Alice', 'Bob', 'Charlie']
// const namesString = "Alice, Bob, Charlie";
// console.log(namesString.split(", "));

// 10. Найти самый дешевый продукт
// Описание: Определите продукт с минимальной ценой.
// const products = [
//   { name: "Notebook", price: 50 },
//   { name: "Pen", price: 10 },
//   { name: "Backpack", price: 300 },
//   { name: "Eraser", price: 5 },
// ];
// let str = products[0].price;
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price < str) {
//     str = products[i].price;
//   }
// }
// console.log(str);

// console.log(cheapestProduct); // { name: 'Eraser', price: 5 }

// 11. Фильтр слов по длине
// Описание: Отфильтруйте слова длиной более 3 символов.
// console.log(longWords); // ['elephant']
// const words = ["cat", "dog", "elephant", "ant"];
// let arr = [];
// for (let y = 0; y < words.length; y++) {
//   if (words[y].length > 3) {
//     arr.push(words[y]);
//     console.log(arr);
//   }
// }

// 12. Удвоение чисел
// Описание: Умножьте каждое число на 2.
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5];
// let arr = [];
// for (let r = 0; r < numbers.length; r++) {
//   arr.push(numbers[r] * 2);
// }
// console.log(arr);

// 13. Проверка наличия отрицательных чисел
// Описание: Проверьте, есть ли в массиве отрицательные числа.
// console.log(hasNegative); // true
// const numbers = [1, 2, -3, 4, 5, -9];
// console.log(
//   numbers.some((el) => {
//   return  el < 0;
//   })
// );

// > Taalaibek Ymankulov:
// 14. Подсчет слов в предложении
// Описание: Подсчитайте количество слов в строке.
// console.log(wordCount); // 5
// const sentence = "This is a simple sentence";
// console.log(sentence.split(" ").length);

// 15. Найти сумму всех чисел
// Описание: Подсчитайте сумму чисел в массиве.
// console.log(totalSum); // 150
// const numbers = [10, 20, 30, 40, 50];
// let num = 0;
// for (let f = 0; f < numbers.length; f++) {
//   num += numbers[f];
// }
// console.log(num);

// 16. Фильтрация пользователей по имени
// Описание: Оставьте в массиве только пользователей с именем, содержащим букву “a”.
// console.log(usersWithA);
// // [
// //   { name: 'Alice', age: 25 },
// //   { name: 'Charlie', age: 35 }
// // ]
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Eve", age: 20 },
// ];

// console.log(
//   users.filter((el) => {
//     if (el.name.toLowerCase().includes("a")) {
//       console.log(el);
//     }
//   })
// );

// 17. Проверка, есть ли товар с рейтингом 5
// Описание: Проверьте, есть ли хотя бы один товар с рейтингом 5.
// console.log(hasTopRatedProduct); // true
// let products = [
//   { name: "Laptop", rating: 4.5 },
//   { name: "Mouse", rating: 3.8 },
//   { name: "Keyboard", rating: 4.2 },
//   { name: "Monitor", rating: 5 },
// ];

// console.log(
//   products.some((el) => {
//     return el.rating === 5;
//   })
// );

// 18. Найти самое длинное слово
// Описание: Определите самое длинное слово в массиве.
// console.log(longestWord); // 'elephant'
// const words = ["cat", "elephant", "dog", "giraffe"];
// console.log(
//   words.reduce((acc, el) => {
//     return acc.length > el.length ? acc : el
//   })
// );

// 19. Преобразование массива чисел в строку
// Описание: Преобразуйте массив чисел в строку, где числа разделены дефисами.
// console.log(numbersString); // '1-2-3-4-5'
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join("-"));

// 20. Найти минимальное и максимальное число
// Описание: Определите минимальное и максимальное число в массиве.
// console.log(min); // 1
// console.log(max); // 9
// const numbers = [5, 3, 9, 1, 6, 8];
// let min = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//   if (min > numbers[i]) {
//     min = numbers[i]
//   }
// }
// console.log(min);

// const numbers = [5, 3, 9, 1, 6, 8];
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// 21. Найти все четные числа
// Описание: Оставьте в массиве только четные числа.
// console.log(evenNumbers); // [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //   if (numbers[i] % 2 === 0) {
// //     console.log(numbers[i]);
// //   }
// // }
// console.log(numbers.filter((el) => el % 2 === 0));

// > Taalaibek Ymankulov:
// 22.  Обратный порядок массива
// Описание: Разверните массив в обратном порядке.
// console.log(reversed); // [5, 4, 3, 2, 1]
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());

// 23. Умножить все числа на индекс
// Описание: Умножьте каждый элемент массива на его индекс.
// console.log(multipliedByIndex); // [0, 20, 60, 120]
// const numbers = [10, 20, 30, 40];
// let arr = [];
// for (let i = 0; i < numbers.length; i++) {
//   arr.push(numbers[i] * i);
// }
// console.log(arr);

// 24. Проверка, все ли числа положительные
// Описание: Убедитесь, что все числа в массиве положительные.
// console.log(allPositive); // false
// const numbers = [1, 2, 3, 4, -5];
// console.log(
//   numbers.every((el) => {
//   return  el > 0;
//   })
// );
// 25. Удалить элементы по значению
// Описание: Удалите из массива все элементы со значением “null”.
// console.log(filteredData); // [1, 2, 3, 4]
// const data = [1, null, 2, 3, null, 4];
// let arr = [];
// for (let i = 0; i < data.length; i++) {
//   if (data[i] === null) {
//     continue;
//   }
//   arr.push(data[i]);
// }
// console.log(arr);
// ====== варият 2
// console.log(
//   data.filter((el) => {
//     return el !== null;
//   })
// );

// ==========================================--------------------------------================================
// > Taalaibek Ymankulov:
// 1. Преобразование цен в другую валюту
// Описание: Преобразуйте массив цен в долларах в рубли (1 доллар = 100 рублей).
// console.log(pricesInRUB); // [1000, 1500, 2000, 2500]
// const pricesInUSD = [10, 15, 20, 25];
// console.log(pricesInUSD.map((el) => el * 100));

// 2. Отфильтровать совершеннолетних
// Описание: Верните массив только тех, кто старше 18 лет.
// console.log(adults); // [18, 21, 34, 19]
// const ages = [12, 17, 18, 21, 34, 15, 19];
// console.log(
//   ages.filter((el) => {
//     if (el >= 18) {
//       return el;
//     }
//   })
// );

// 3. Получение имен пользователей
// Описание: Создайте массив только из имен.
// console.log(userNames); // ['Alice', 'Bob', 'Charlie']
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// console.log(users.map((el) => el.name));

// 4. Удаление товаров дешевле 100 рублей
// Описание: Удалите товары, у которых цена ниже 100 рублей.
// console.log(expensiveProducts); // [{ name: 'Backpack', price: 300 }]
// const products = [
//   { name: "Notebook", price: 50 },
//   { name: "Pen", price: 10 },
//   { name: "Backpack", price: 300 },
//   { name: "Eraser", price: 5 },
// ];
// console.log(
//   products.filter((el) => {
//     if (el.price > 100) {
//       return el;
//     }
//   })
// );

// 5. Добавить скидку к товарам
// Описание: Примените скидку 20% ко всем товарам.
// console.log(discountedProducts);
// // [
// //   { name: 'Shirt', price: 160 },
// //   { name: 'Pants', price: 320 },
// //   { name: 'Hat', price: 80 }
// // ]
// const products = [
//   { name: "Shirt", price: 200 },
//   { name: "Pants", price: 400 },
//   { name: "Hat", price: 100 },
// ];
// console.log(products.map((el) => {
//   el.price = el.price - (el.price / 100) * 20;
//     return el
// }));

// function task(str) {
//   return str.map((el) => {
//     el.price = el.price - (el.price / 100) * 20;
//     return el
//   });
// }
// console.log(task(products));

// 6. Подсчет общего количества товаров
// Описание: Подсчитайте общее количество всех товаров на складе.
// console.log(totalQuantity); // 23
// const inventory = [
//   { name: "Shirt", quantity: 10 },
//   { name: "Pants", quantity: 5 },
//   { name: "Hat", quantity: 8 },
// ];
// console.log(
//   inventory.reduce((acc, el) => {
//     return acc + el.quantity;
//   }, 0)
// );

// 7. Проверка всех пользователей на возраст
// Описание: Убедитесь, что все пользователи старше 18 лет.
// console.log(allAdults); // true
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// console.log(users.every((el) => {
//     el.age > 18
//     return el
// }));

// 8. Преобразование массива в строку
// Описание: Преобразуйте массив имен в строку, разделенную запятыми.
// console.log(namesString); // 'Alice, Bob, Charlie'
// const names = ["Alice", "Bob", "Charlie"];
// console.log(names.join(","));

// 9. Разделение строки на массив
// Описание: Преобразуйте строку с именами в массив.
// console.log(namesArray); // ['Alice', 'Bob', 'Charlie']
// const namesString = "Alice, Bob, Charlie";
// console.log(namesString.split(", "));

// 10. Найти самый дешевый продукт
// Описание: Определите продукт с минимальной ценой.
// console.log(cheapestProduct); // { name: 'Eraser', price: 5 }
// const products = [
//   { name: "Notebook", price: 50 },
//   { name: "Pen", price: 10 },
//   { name: "Backpack", price: 300 },
//   { name: "Eraser", price: 5 },
// ];
// function task1(str) {
//   return str.reduce((acc, el) => {
//    return acc.price < el.price ? acc : el
//   });
// }
// console.log(task1(products));

// 11. Фильтр слов по длине
// Описание: Отфильтруйте слова длиной более 3 символов.
// console.log(longWords); // ['elephant']
// const words = ['cat', 'dog', 'elephant', 'ant'];
// console.log(words.filter((el) => el.length > 3));

// 12. Удвоение чисел
// Описание: Умножьте каждое число на 2.
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((el) => el * 2));

// 13. Проверка наличия отрицательных чисел
// Описание: Проверьте, есть ли в массиве отрицательные числа.
// console.log(hasNegative); // true
// const numbers = [1, 2, -3, 4, 5];
// console.log(numbers.some((el) => el < 0));

// > Taalaibek Ymankulov:
// 14. Подсчет слов в предложении
// Описание: Подсчитайте количество слов в строке.
// console.log(wordCount); // 5
// const sentence = "This is a simple sentence";
// console.log(sentence.split((" ")).length);

// 15. Найти сумму всех чисел
// Описание: Подсчитайте сумму чисел в массиве.
// console.log(totalSum); // 150
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.reduce((acc, el) => acc + el));

// 16. Фильтрация пользователей по имени
// Описание: Оставьте в массиве только пользователей с именем, содержащим букву “a”.
// console.log(usersWithA);
// // [
// //   { name: 'Alice', age: 25 },
// //   { name: 'Charlie', age: 35 }
// // ]
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Eve", age: 20 },
// ];
// console.log(
//   users.filter((el) => {
//     if (el.name.toLowerCase().includes("a")) {
//       return el;
//     }
//   })
// );

// 17. Проверка, есть ли товар с рейтингом 5
// Описание: Проверьте, есть ли хотя бы один товар с рейтингом 5.
// console.log(hasTopRatedProduct); // true
// const products = [
//   { name: 'Laptop', rating: 4.5 },
//   { name: 'Mouse', rating: 3.8 },
//   { name: 'Keyboard', rating: 4.2 },
//   { name: 'Monitor', rating: 5 }
// ];
// console.log(products.some((el) => el.rating === 5));

// 18. Найти самое длинное слово
// Описание: Определите самое длинное слово в массиве.
// console.log(longestWord); // 'elephant'
// const words = ["cat", "elephant", "dog", "giraffe"];
// console.log(
//   words.reduce((acc, el) => {
//     return acc.length > el.length ? acc : el;
//   })
// );

// 19. Преобразование массива чисел в строку
// Описание: Преобразуйте массив чисел в строку, где числа разделены дефисами.
// console.log(numbersString); // '1-2-3-4-5'
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join("-"));

// 20. Найти минимальное и максимальное число
// Описание: Определите минимальное и максимальное число в массиве.
// console.log(min); // 1
// const numbers = [5, 3, 9, 1, 6, 8];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// console.log(max); // 9

// 21. Найти все четные числа
// Описание: Оставьте в массиве только четные числа.
// console.log(evenNumbers); // [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers.filter((el) => el % 2 === 0 ));

// 22.  Обратный порядок массива
// Описание: Разверните массив в обратном порядке.
// console.log(reversed); // [5, 4, 3, 2, 1]
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());

// 23. Умножить все числа на индекс
// Описание: Умножьте каждый элемент массива на его индекс.
// console.log(multipliedByIndex); // [0, 20, 60, 120]
// const numbers = [10, 20, 30, 40];
// console.log(
//   numbers.map((el, idx) => {
//     return el * idx;
//   })
// );

// 24. Проверка, все ли числа положительные
// Описание: Убедитесь, что все числа в массиве положительные.
// console.log(allPositive); // false
// const numbers = [1, 2, 3, 4, -5];
// console.log(numbers.every((el) => el > 0));

// 25. Удалить элементы по значению
// Описание: Удалите из массива все элементы со значением “null”.
// console.log(filteredData); // [1, 2, 3, 4]
// const data = [1, null, 2, 3, null, 4];
// console.log(
//   data.filter((el) => {
//     return el !== null;
//   })
// );

// ====================================================================================================================================================
// 3.12.2024

// for...in: для объектов
// let obj = {
//   id: 5,
//   name: "Vector",
//   age: 22,
//   job: "Developer",
// };
// for (let key in obj) {
//   //   console.log(key);
//   console.log(obj[key]);
// }

// for...of: для массивов
// let arr = [10, 20, 30, 40,50];
// for (let value of arr) {
//   if (value > 30) {
//     console.log(value);
//   }
// }

// 1. Задача: Используя for...in, выведите все ключи объекта в консоль.
// const user = { name: "John", age: 25, city: "New York" };
// for (let key in user) {
//   console.log(key);
// }

// 2. Задача: Используя for...in, выведите все значения объекта в консоль.
// const user = { name: "John", age: 25, city: "New York" };
// for (let jas in user) {
//     console.log(user[jas]);
// }

// 3. Задача: Найдите сумму всех значений объекта.
// const salaries = { Alice: 3000, Bob: 1500, Charlie: 2000 };
// let num = 0;
// for (let jasi in salaries) {
//   num += salaries[jasi];
// }
// console.log(num);

// 4. Задача: Используя for...in, проверьте, есть ли ключ "model" в объекте.
// const car = { brand: "Toyota", model: "Corolla", year: 2018 };
// for (let asman in car) {
//   console.log(model in car);
// }

// 5. Задача: Найдите количество ключей в объекте.
// const book = { title: "1984", author: "George Orwell", pages: 328 };
// let count = 0;
// for (let key in book) {
//   count++;
// }
// console.log(count);

// 6. Задача: Создайте массив, где каждый элемент — строка вида "ключ: значение".
// const fruit = { name: "Apple", color: "Red", weight: "150g" };
// let arr = [];
// for (let i in fruit) {
//   arr.push(fruit);
// }
// console.log(arr);

// 7. Задача: Используя for...in, удалите свойство "job".
// const person = { name: "Alice", age: 30, job: "Developer" };
// for (let key in person) {
//   delete person.job;
// }
// console.log(person);

// 8. Задача: Увеличьте каждое числовое значение на 10.
// const stats = { speed: 40, strength: 60, agility: 70 };
// let i = 0;
// for (let obj in stats) {
//   i = stats[obj] * 10;
//   console.log(i);
// }

// 9. Задача: Преобразуйте все строковые значения объекта в верхний регистр.
// const userInfo = { name: "john", city: "london", country: "uk" };
// for (let str in userInfo) {
//   console.log(userInfo[str].toUpperCase());
// }

// 10. Задача: Найдите имя студента с наивысшим баллом.
// const scores = { Alice: 85, Bob: 92, Charlie: 88 };
// let num = scores.Alice;
// let str = "";
// for (let i in scores) {
//   if (num < scores[i]) {
//     num = scores[i];
//     str = i;
//     console.log(str, num);
//   }
// }

// 1. Задача: Используя for...of, выведите все элементы массива в консоль.
// const numbers = [10, 20, 30, 40, 50];
// for (let num of numbers) {
//   console.log(num);
// }

// 2. Задача: Найдите сумму всех элементов массива.
// const numbers = [5, 10, 15, 20];
// let n = 0;
// for (let num of numbers) {
//   n += num;
// }
// console.log(n);

// 3. Задача: Используя for...of, выведите только чётные числа.
// const numbers = [1, 2, 3, 4, 5, 6];
// for (let i of numbers) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 4. Задача: Найдите максимальный элемент массива.
// const numbers = [7, 3, 9, 2, 8];
// let num = numbers[0];
// for (let max of numbers) {
//   if (num < max) {
//     num = max;
//     console.log(num);
//   }
// }

// 5. Задача: Создайте новый массив, где каждое число увеличено на 1.
// const numbers = [1, 2, 3, 4];
// let i = 0;
// for (let num of numbers) {
//   i = num + 1;
//   console.log(i);
// }

// 6. Задача: Подсчитайте количество слов, длина которых больше 3.
// const words = ["cat", "elephant", "dog", "fish"];
// let count = 0;
// for (let str of words) {
//   if (str.length > 3) {
//     count++;
//   }
// }
// console.log(count);

// 7. Задача: Выведите элементы массива в обратном порядке.
// const letters = ["a", "b", "c", "d"];
// for (let str of letters) {
// }
// console.log(letters.reverse());

// 8. Задача: Создайте новый массив, содержащий квадраты чисел.
// const numbers = [1, 2, 3, 4];
// let num = 1;
// for (let n of numbers) {
//   num = n ** 2;
//   console.log(num);
// }

// 9. Задача: Найдите сумму чисел, представленных строками.
// const strings = ["123", "456", "789"];
// let count = 0;
// for (let num of strings) {
//   count += Number(num);
// }
// console.log(count);

// 10. Задача: Проверьте, состоит ли массив только из строк.
// const items = ["hello", "world", "45"];
// for (let str of items) {
//   if (typeof str === "string") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно";

// if (str.includes("a") < 1) {
//   console.log("встречается более 1 раза");
// } else {
//   console.log("встречается менее одного раза");
// }
