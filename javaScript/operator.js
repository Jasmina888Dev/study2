// деструктуризация

// obj
// let obj = {
//   name: "jasi",
//   id: 2,
//   passvord: "jasmin",
//   adres: "Bishkek",
//   age: 16,
//   hobby: "kitep",
//   phone: "+996 709 773 054",
//   job: "Developer",
// };
// let { name, id } = obj;
// console.log(name,id);
// console.log(name);
// console.log(id);

// Array
// let arr = [12,34,34,54,67]
// let [a,b,c,d] = arr
// console.log(a);
// console.log(b);

// =================================================================

// spread & rest operator: ...

// spread operator

// Array
// let arr = [1,2,3,4,5]
// // let res = arr
// let result = [...arr]

// obj
// let obj = {
//   name: "jasi",
//   id: 2,
//   passvord: "jasmin",
//   adres: "Bishkek",
//   age: 16,
//   hobby: "kitep",
//   phone: "+996 709 773 054",
//   job: "Developer",
// };
// let sum = obj;
// let res = { ...obj };
// console.log(obj);
// console.log(sum);
//
//
//
//

// rest operator

// function task(a,b,...c) {
//     return a+b+c.reduce((acc, el) => acc + el)
// } console.log(task(1,2,3,4,5,));

// деструктуризацияны rest операторунда колдонсо болот

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...c] = arr;
// console.log(a + b + c);

// let obj = {
//   name: "jasi",
//   id: 1,
//   adres: "osh",
//   phone: "0770987867",
//   hobby: "cooking",
//   age: 16,
// };
// let { name, id, ...res } = obj;
// console.log(name + res);
