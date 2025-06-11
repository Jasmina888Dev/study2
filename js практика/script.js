// </JAVASCRIPT>
// Date type - типы данных - маалымат турлору : 8
//
// number - сандар
// string - жазуулар ""
// boolean - true, false
// undefined - белгисиз
// null - жок 0
// bigint - чон сандар млн трл блн
// symbol- + - * / =
// object - {}

// тип данныйлар 2ге болунот
// 1 - примитивный (number,string,boolean,undefined,null,bigint,symbol)
// 2 - ссылычный (object {})

// 3 переменный бар
// 1-var ----x
// 2-let
// 3-const

// number - Math - методдору :
// console.log(Math.abs(-111)); минус санды пмлус кылып берет (1 параметр алат (сан))
// console.log(Math.pow(5,5)); даражага которот ** (2 параметр алат (сан))
// console.log(Math.sqrt(64)); тамырдан чыгарат (1 параметр алат (сан))
// console.log(Math.floor(15,9)); пол (1 пр алат (сан))
// console.log(Math.ceil(15,4)); паталок (1 пр алат (сан))
// console.log(Math.round(5, 9)); 5.5 (1 пр алат (сан))
// console.log(Math.random()); рандомный сандар 0 - 1 чейин (пр кабыл албайт )
// console.log(Math.trunc()); точкадан кийинки санды окубайт (1 пр алат (сан) )
// console.log(Math.sign(30)); санды озуно озун болот /

// exercise 1

// let num = 2024
// console.log(num/100);
// console.log(Math.ceil(num/100));

// home work
// 2. Вам даны переменные a=10, b=2 и c=5. Выведите в консоль их сумму.
// let a=10, b=2 , c=5
// console.log(a+b+c);

// 3. Вам дана переменная со значением 100, выведите в консоль
//  умноженную переменную на 2.
// let num = 100
// console.log(num*2);

// 4. Вам дана переменная со значением 67. Выведите в консоль остаток
//  деления на 7.
// let num = 67;
// console.log(num%7);

// 5. Вам даны переменные a=10 и b=2. Выведите в консоль их
// сумму, разность, произведение и частное (результат деления).
// let a=10 , b=2
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);

// 6. Вам даны переменные c=15 и d=2. Просуммируйте их, а результат
// присвойте переменной result. Выведите в консоль значение переменной result.
// let c=15 , d=2
// let result = c+d
// console.log(result);

// 7. Вам даны переменные a=30, и b=15 Сложите переменные
// a и b и результат присвойте переменной c. Затем выведите в консоль
//  остаток деления на 4 переменной c.
// let a=30,  b=15
// let c = a/b
// console.log(c%4);

// 8. Вам даны переменные a=17 и b=10. Отнимите от a переменную
//  b и результат присвойте переменной c. Затем создайте переменную d,
//  присвойте ей значение. Сложите переменные c и d, а результат запишите в
//   переменную result. Выведите в консоль значение переменной result.
// let a=17 , b=10
// let c = a-b
// let d = 7
// let result = c/d
// console.log(result);

// > Taalaibek Ymankulov:
// 1. Преобразование цен в другую валюту
// Описание: Преобразуйте массив цен в долларах в рубли (1 доллар = 100 рублей).
// console.log(pricesInRUB); // [1000, 1500, 2000, 2500]
// const pricesInUSD = [10, 15, 20, 25];
// console.log(pricesInUSD.reduce((acc, el) => {
//     acc.push(el*100)
//     return acc
// }, []));

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
// console.log(users.name);

// 4. Удаление товаров дешевле 100 рублей
// Описание: Удалите товары, у которых цена ниже 100 рублей.
// const products = [
//   { name: 'Notebook', price: 50 },
//   { name: 'Pen', price: 10 },
//   { name: 'Backpack', price: 300 },
//   { name: 'Eraser', price: 5 }
// ];
// console.log(expensiveProducts); // [{ name: 'Backpack', price: 300 }]

// 5. Добавить скидку к товарам
// Описание: Примените скидку 20% ко всем товарам.
const products = [
  { name: "Shirt", price: 200 },
  { name: "Pants", price: 400 },
  { name: "Hat", price: 100 },
];
console.log(discountedProducts);
// [
//   { name: 'Shirt', price: 160 },
//   { name: 'Pants', price: 320 },
//   { name: 'Hat', price: 80 }
// ]

// 6. Подсчет общего количества товаров
// Описание: Подсчитайте общее количество всех товаров на складе.
// const inventory = [
//   { name: 'Shirt', quantity: 10 },
//   { name: 'Pants', quantity: 5 },
//   { name: 'Hat', quantity: 8 }
// ];
// console.log(totalQuantity); // 23

// 7. Проверка всех пользователей на возраст
// Описание: Убедитесь, что все пользователи старше 18 лет.
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// console.log(allAdults); // true

// 8. Преобразование массива в строку
// Описание: Преобразуйте массив имен в строку, разделенную запятыми.
// const names = ['Alice', 'Bob', 'Charlie'];
// console.log(namesString); // 'Alice, Bob, Charlie'

// 9. Разделение строки на массив
// Описание: Преобразуйте строку с именами в массив.
// const namesString = 'Alice, Bob, Charlie';
// console.log(namesArray); // ['Alice', 'Bob', 'Charlie']

// 10. Найти самый дешевый продукт
// Описание: Определите продукт с минимальной ценой.
// const products = [
//   { name: 'Notebook', price: 50 },
//   { name: 'Pen', price: 10 },
//   { name: 'Backpack', price: 300 },
//   { name: 'Eraser', price: 5 }
// ];
// console.log(cheapestProduct); // { name: 'Eraser', price: 5 }

// 11. Фильтр слов по длине
// Описание: Отфильтруйте слова длиной более 3 символов.
// const words = ['cat', 'dog', 'elephant', 'ant'];
// console.log(longWords); // ['elephant']

// 12. Удвоение чисел
// Описание: Умножьте каждое число на 2.
// const numbers = [1, 2, 3, 4, 5];
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 13. Проверка наличия отрицательных чисел
// Описание: Проверьте, есть ли в массиве отрицательные числа.
// const numbers = [1, 2, -3, 4, 5];
// console.log(hasNegative); // true

// > Taalaibek Ymankulov:
// 14. Подсчет слов в предложении
// Описание: Подсчитайте количество слов в строке.
// const sentence = 'This is a simple sentence';
// console.log(wordCount); // 5

// 15. Найти сумму всех чисел
// Описание: Подсчитайте сумму чисел в массиве.
// const numbers = [10, 20, 30, 40, 50];
// console.log(totalSum); // 150

// 16. Фильтрация пользователей по имени
// Описание: Оставьте в массиве только пользователей с именем, содержащим букву “a”.
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'Eve', age: 20 }
// ];
// console.log(usersWithA);
// // [
// //   { name: 'Alice', age: 25 },
// //   { name: 'Charlie', age: 35 }
// // ]

// 17. Проверка, есть ли товар с рейтингом 5
// Описание: Проверьте, есть ли хотя бы один товар с рейтингом 5.
// const products = [
//   { name: 'Laptop', rating: 4.5 },
//   { name: 'Mouse', rating: 3.8 },
//   { name: 'Keyboard', rating: 4.2 },
//   { name: 'Monitor', rating: 5 }
// ];
// console.log(hasTopRatedProduct); // true

// 18. Найти самое длинное слово
// Описание: Определите самое длинное слово в массиве.
// const words = ['cat', 'elephant', 'dog', 'giraffe'];
// console.log(longestWord); // 'elephant'

// 19. Преобразование массива чисел в строку
// Описание: Преобразуйте массив чисел в строку, где числа разделены дефисами.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbersString); // '1-2-3-4-5'

// 20. Найти минимальное и максимальное число
// Описание: Определите минимальное и максимальное число в массиве.
// const numbers = [5, 3, 9, 1, 6, 8];
// console.log(min); // 1
// console.log(max); // 9

// 21. Найти все четные числа
// Описание: Оставьте в массиве только четные числа.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(evenNumbers); // [2, 4, 6, 8, 10]
