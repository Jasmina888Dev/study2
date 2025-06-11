// 2. Найти минимальное значение в массиве
// Дан массив чисел. Напишите функцию, которая находит минимальное значение в массиве, используя только reduce.
// const arr = [5, 3, 8, 1, 9, 6];
// console.log(Math.min(...arr));
// console.log(arr.reduce((acc, el) => {
//     if (acc < el) {
//         return acc
//     } else {
//         return el
//     }
// }));

// 3. Найти максимальное значение в массиве
// Дан массив чисел. Напишите функцию, которая находит максимальное значение в массиве, используя только reduce.
// const arr = [5, 3, 8, 1, 9, 6];
// // console.log(Math.max(...arr));
// console.log(
//   arr.reduce((acc, el) => {
//     if (acc > el) {
//       return acc;
//     } else {
//       return el;
//     }
//   })
// );

// 4. Умножение всех чисел в массиве
// Дан массив чисел. Напишите функцию, которая возвращает произведение всех чисел, используя только reduce.
// const arr = [1, 2, 3, 4];
// function task(num) {
//   return num.reduce((acc, el) => {
//     return acc * el;
//   });
// }
// console.log(task(arr)); // 24

// 5. Подсчет количества положительных чисел в массиве
// Дан массив чисел. Напишите функцию, которая подсчитывает количество положительных чисел в массиве, используя только reduce.
// const arr = [1, -2, 3, -4, 5];
// function task(num) {
// return num.reduce((acc, el) => {
//     if (el > 0) {
//       return acc+1;
//     } else {
//        return acc
//     }
//   }, 0);
// }
// console.log(task(arr));

// 6. Подсчет количества отрицательных чисел в массиве
// Дан массив чисел. Напишите функцию, которая подсчитывает количество отрицательных чисел в массиве, используя только reduce.
// const arr = [1, -2, 3, -4, 5, -9, -7, -8, -9];
// console.log(
//   arr.reduce((acc, el) => {
//     if (el < 0) {
//       return acc + 1;
//     } else {
//       return acc;
//     }
//   }, 0)
// );

// 7. Подсчет общего количества символов в массиве строк
// Дан массив строк. Напишите функцию, которая возвращает общее количество символов во всех строках, используя только reduce.
// const words = ["apple", "banana", "cherry"];
// console.log(
//   words.reduce((acc, el) => {
//     return acc + el.length;
//   }, 0)
// );

// 8. Преобразование массива чисел в массив их квадратов
// Дан массив чисел. Напишите функцию, которая возвращает массив чисел, являющихся квадратами чисел из исходного массива, используя только reduce.
// const arr = [1, 2, 3, 4];
// console.log(
//   arr.reduce((acc, el) => {
//     acc.push(el ** 2);
//     return acc;
//   }, [])
// );

// 9. Преобразование массива строк в массив их длин
// Дан массив строк. Напишите функцию, которая возвращает массив длин этих строк, используя только reduce.
// const words = ["apple", "banana", "cherry"];
// console.log(
//   words.reduce((acc, el) => {
//     return acc + el.length;
//   }, 0)
// );

// 10. Получить все уникальные элементы из массива
// Дан массив чисел. Напишите функцию, которая возвращает массив уникальных элементов, используя только reduce.
// const arr = [1, 2, 2, 3, 4, 4, 5];
// // let num = [...new Set(arr)];
// // console.log(num);
// function task(num) {
//   return num.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, []);
// }
// console.log(task(arr));

//?
// Дан массив строк с названиями городов. Напиши функцию, которая принимает этот массив и возвращает новый массив, содержащий только те города,
//  которые начинаются с буквы "А" (регистр не имеет значения), но с названием в верхнем регистре.
// Ожидаемый результат: ["АЛМАТЫ", "АСТАНА", "АСТРАХАНЬ"]
// let cities = ["Алматы", "Бишкек", "Астана", "Москва", "астрахань", "Ташкент"];
// function task(str) {
//   return str
//     .filter((el) => el[0].toLocaleUpperCase() === "А")
//     .map((el) => el.toUpperCase());
// }
// console.log(task(cities));

// чисел исходного массива nums указано количество чисел меньше данного числа.
// К примеру, для массива  [4, 0, 1, 1, 3];, функция должна возвратить:
// let arr = [8, 1, 2, 2, 3];
// console.log(arr.map((el) => arr.filter((elem) => el > elem).length));

// function taskNumbers(arr) {
//   return arr.map((el) => arr.filter((elem) => el > elem).length);
// }

// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только уникальные элементы (без дубликатов).
//Вывод будет: [1, 2, 3, 4, 5]
// let nums = [1, 1, 2, 2, 3, 4, 4, 5];
// console.log(nums.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//         acc.push(el)
//        return acc
//     } else {
//         return acc
//     }
// }, []));

// Вам дана функция checkTask, принимающая массив arr с числами.
// вычтите числа в массиве начиная с начала и выведите в консоль результат.
// Например:
// checkTask( [175, 50, 25])
// Вывод: 100
// let arr = [175, 50, 25];
// console.log(
//   arr.reduce((acc, el) => {
//     return acc - el;
//   })
// );

// создайте функцию которая возвратит аббревиатуру фамилии и имени
// принимает в аргументы строку, должна возвращать первые буквы
// "Denzel Washington" --> "D.W"
// "chuck norris" --> "C.N"
// "cristiano Ronaldo" --> "C.R"

// function task(str) {
//   return str
//     .split(" ")
//     .map((el) => el[0].toUpperCase())
//     .join(".");
// }
// console.log(task("Denzel Washington")); // "D.W"
// console.log(task("chuck norris")); // "C.N"
// console.log(task("cristiano Ronaldo"));

// задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')
// let auto = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// console.log(
//   auto.map((el) => {
//     if (el.year > 2007) {
//       el.sale = 20;
//       (el.price * 100) / 20;
//       return el;
//     } else {
//       return el;
//     }
//   })
// );

// удваивайте каждые вторые...
// [1,2,3,4] => [1,4,3,8]
// let arr = [1, 2, 3, 4];
// console.log(
//   arr.map((el, idx) => {
//     if (idx % 2 !== 0) {
//       return el * 2;
//     } else {
//       return el;
//     }
//   })
// );

// извлекайте дубликатов
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
// let arr = [1, 2, 1, 1, 3, 2];
// function task(num) {
//   return num.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//       return acc;
//     } else {
//       return acc;
//     }
//   }, []);
// }
// console.log(task(arr));

// ================= for in
// 1. Задача: Используя for...in, выведите все ключи объекта в консоль.
// const user = { name: "John", age: 25, city: "New York" };
// for (let i in user) {
//   console.log(i);

// }

// 2. Задача: Используя for...in, выведите все значения объекта в консоль.
// const user = { name: "John", age: 25, city: "New York" };
// for (let i in user) {
//   console.log(user[i]);
// }

// 3. Задача: Найдите сумму всех значений объекта.
// const salaries = { Alice: 3000, Bob: 1500, Charlie: 2000 };
// let res = 0;
// for (let i in salaries) {
//   res += salaries[i];
// }
// console.log(res);

// 4. Задача: Используя for...in, проверьте, есть ли ключ "model" в объекте.
// const car = { brand: "Toyota", model: "Corolla", year: 2018 };
// let res = false;
// for (let i in car) {
//   if (i === "model") {
//     res = true;
//   }
// }
// console.log(res);

// 5. Задача: Найдите количество ключей в объекте.
// const book = { title: "1984", author: "George Orwell", pages: 328 };
// let res = 0;
// for (let i in book) {
//   res++;
// }
// console.log(res);

// 6. Задача: Создайте массив, где каждый элемент — строка вида "ключ: значение".
// const fruit = { name: "Apple", color: "Red", weight: "150g" };

// 7. Задача: Используя for...in, удалите свойство "job".
// const person = { name: "Alice", age: 30, job: "Developer" };
// for (let i in person) {
//   delete person.job;
// }
// console.log(person);

// 8. Задача: Увеличьте каждое числовое значение на 10.
// const stats = { speed: 40, strength: 60, agility: 70 };
// for (let key in stats) {
//   if (typeof stats[key] === "number") {
//     stats[key] += 10;
//   }
// }

// console.log(stats);

// 9. Задача: Преобразуйте все строковые значения объекта в верхний регистр.
// const userInfo = { name: "john", city: "london", country: "uk" };
// for (let u in userInfo) {
//   console.log(userInfo[u].toUpperCase());

// }

// 10. Задача: Найдите имя студента с наивысшим баллом.
// const scores = { Alice: 85, Bob: 92, Charlie: 88 };
// let res = scores.Alice
// for (let u in scores) {
//   if (res > scores[u]) {
//     console.log(res);
//   } else {
//     console.log(scores[u]);
//   }
// }


