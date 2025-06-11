// удваивайте каждые вторые...
// [1,2,3,4] => [1,4,3,8]
// let arr = [1, 2, 3, 4];
// console.log(
//   arr.map((el, idx) => {
//     if (idx % 2 !== 0) {
//       return el * 2
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

// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')
// let arr = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// console.log(
//   arr.map((el) => {
//     if (el.year > 2007) {
//       el.sale = 20;
//       (el.price * 100) / 20;
//       return el;
//     } else {
//       return el;
//     }
//   })
// );

// создайте функцию которая возвратит аббревиатуру фамилии и имени
// принимает в аргументы строку, должна возвращать первые буквы
// "Denzel Washington" --> "D.W"
// "chuck norris" --> "C.N"
// "cristiano Ronaldo" --> "C.R"

// function task(str) {
//   return str
//       .split(" ")
//       .map((el) => el[0].toUpperCase())
//       .join(".");
// }
// console.log(task("Denzel Washington"));
// console.log(task("chuck norris"));
// console.log(task("cristiano Ronaldo"));

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50


// for (let n = 50; n < 1000; n = n * 2) {
//   console.log(n);
// }
// for (let n = 800; n >= 50; n = n / 2) {
//   console.log(n);
// }


