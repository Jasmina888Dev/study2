// string - строка - сап
// Строки:
// string ""  ` `  ''
//string "welcome" "123456789"  "   "

// stringтин 2 касиети бар :
//lenght канча тамга экенин аныктайт
// index кайсыл тамга канчанчы сифрада турганын аныктайт
//
//
//

// STR методтору
// let str = "jasmina";
// console.log(str.charAt()); indexке окшоп иштейт бирок consolго undefined чыгарбайт
// console.log(str.indexOf()); тамга канчанчы indexте турганын таап берет
// console.log(str.lastIndexOf()); аркадан окуйт тамга канчанчы indexте турганын таап берет
// let str = "Bishkek";
// let a = " city";

// 
// текке алып жазат :
// console.log(str.sub());
// console.log(str.sup());
// console.log(str.big());
// console.log(str.link("https://github.com/ymankulov"));


// 
// console.log(str.slice(-1)); -1 сан жазсан аркадан окуп баштайт

// 
// console.log(str.substring(4, 7));
// console.log(str.substr(4, 3));
// 
// пробелдерди жоготот :
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.trimLeft());
// console.log(str.trimRight());
// 
// тамгалар
// console.log(str.toUpperCase()); чонойтот
// console.log(str.toLowerCase()); кичирейтет
// 
// console.log(str.concat(a)); 2 параметрди 1 строкага туздоп жазат
// console.log(str.replace("k", "d")); М: "k" тамгасын "d" тамгасына озгорт
// console.log(str.replaceAll("k", "d")); создун ичиндеги "k" тамгаларын баарын "d" тамгасына озгорт
// console.log(str.repeat(4)); кайталануу
// console.log(str.includes("q")); // true - false 

// let a = "Ulan";
// let b = "келген"
// console.log(`Бугун ${a} сабака ${b} жок!`); `$` доллар ушудай тырмакчанын гана ичинде иштейт

// let str = "jasmina";
// console.log(str[3]);

// Exercise
// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str = "Привет, Мир!";
// console.log(str);

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции
// сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let  str1= "Привет,"
// let str2 = " Мир!";
// console.log(str1.concat(str2));

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let a = "Привет";
// let name = " Jasmina";
// console.log(a.concat(name));

// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age = "Мне  лет!";
// let a =16
// console.log(`Мне ${a} лет!`);

// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// let a = 365
// let b = "Земля";
// let c = "7 млрд.";
// let d = "Солнце";
// console.log(
//   `"В нашем году ${a} дней. Днём у нас светит ${d}. Население планеты ${b} составляет примерно ${c}. человек."`
// );

// home-work
// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// let str = "Nevis ITDB TECH";
// console.log(str.substring(0, 5).length);

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,
// let str = "Максимально УЖАСНО";
// console.log(str.substr(12));

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,только верхним регистром.
// let str = "максимально УЖАСНО";
// console.log(str.substring(0, 11).toUpperCase);

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// let str = "Максимально Ужасно";
// console.log(str.slice(5));

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// let str = "Максимально Ужасно";
// console.log(str.charAt(12));

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// let str = "Максимально";
// console.log(str.concat(` Ужасно`));

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно"
//
//
//
//
//

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// let str = "макСИМАЛЬНО ужаСНО";
// console.log(str[0].toLocaleUpperCase() + str.slice(1).toLowerCase());


// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// let str = "Максимально Ужасно";
// console.log(str.indexOf("а"));
// console.log(str.lastIndexOf("а"));

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// let str = "Максимально Ужасно";
// console.log(str.indexOf("о"));
// console.log(str.lastIndexOf("о"));

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = "aaa bbb ccc";
// console.log(str.substring(4, 7));
// console.log(str.substr(4, 3));
// console.log(str.slice(4, 7));
// console.log(str.slice(-7, -4));

// let str = "jasmina";
// console.log(str.sub(str));

// задача
// Вот задачи, где нужно использовать методы строк slice, trim, includes, и concat без использования функций:

// Задача 1: Обрезка строки с помощью slice
// Есть строка "JavaScript" — получи подстроку "Script" с помощью метода slice.
// let str = "JavaScript";
// "Script"
// let str = "JavaScript";
// console.log(str.slice(4, 10));

// Задача 2: Удаление пробелов с помощью trim
// Дана строка "   Hello, World!   ". Удали пробелы в начале и конце строки с помощью trim.
// let str = "   Hello, World!   ";
// "Hello, World!"
// let str = "   Hello, World!   "
// console.log(str.trimStart(str));
// console.log(str.trimEnd(str));

// Задача 3: Проверка наличия подстроки с помощью includes
// Есть строка "I love JavaScript". Проверь, содержит ли она подстроку "love" с помощью includes.
// let str = "I love JavaScript";
// // true
// let str = "I love JavaScript";
// console.log(str.includes("love"));


// Задача 4: Объединение строк с помощью concat
// Есть две строки "Hello" и "World". Объедини их в одну строку "Hello World" с использованием concat.

// let str1 = "Hello";
// let str2 = " World";
// console.log(str1.concat(str2)); 



// let str = "вектор"
// console.log(str.charAt(2));
