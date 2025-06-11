// Task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
// let task1 = document.querySelector("a")
// console.log(task1.textContent);
// console.log(task1.innerText);
// console.log(task1.innerHTML);
   
// Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// let task2 = document.querySelectorAll("a");
// let res = Array.from(task2);
// console.log(res.map((el) => el.textContent));

// Task 3
// Напишите функцию, которая вернет массив с текстами
//  внутри тэгов элементов с классом navlinkitem
// let task3 = document.querySelectorAll(".navlinkitem");
// let res = Array.from(task3);
// console.log(res.map((el) => el.innerHTML));

// Task 4
// Напишите функцию, которая вернет массив со значениями атрибута
//  class внутри тэгов элементов с классом navlinkitem
// let task4 = document.querySelectorAll(".navlinkitem");
// let res = Array.from(task4)
// console.log(res.map((el) => {
//     return el.setAttribute("id", "link")
// }));

// Task 5
// Напишите функцию, которая вернет массив со значениями
// атрибута data-link внутри тэгов элементов с классом nav__link .
// let task5 = document.querySelectorAll(".nav__link");
// console.log(Array.from(task5).map((el) => el.getAttribute("data-link")));

// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно,
//  по правилам внутри элемента с классом nav__link должен быть текст порядкового номера
//  индекса. И у этого же элемента должен быть класс с текстовым номером индекса.
// let task6 = document.querySelectorAll(".nav__link");
// let res = Array.from(task6);
// console.log(
//   res.map((el) => {
//     if (el.classList[1] !== el.innerHTML) {
//       return el.getAttribute("data-link");
//     }
//   })
// );

// Например
// <a class="nav__link  first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.
// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a>
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть ${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {

// })
// let task7 = document.querySelectorAll(".nav-link")
// task7.forEach((el, idx, arr) => {
//   el = `<a href="#" class="nav__link ${el.classList[1]}"
//   data-link="${idx}">${idx} ${el.classList[1]}</a>`;

//   console.log(el );
// });
// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link. Удалите их на странице. Для удаления используйте forEach.
// Что бы удалить элемент из DOM - используйте метод .remove()

// yourElementsArray.forEach((element) => {

// })

// let yourElementsArray = document.querySelectorAll(".nav__link");
// yourElementsArray.forEach((element) => {
//   if (element.classList[1] !== element.innerHTML) {
//     element.remove();
//   }
// });

// let appendTest = document.querySelector(".black");
// let appendTests = document.querySelector(".white");
// // let btnTest = document.createElement("button");
// const body = document.body;
// // btnTest.textContent = "Click";
// // btnTest.className = "btn";
// // btnTest.style.background = "blue";
// // btnTest.style.color = "white";
// // btnTest.style.border = "none";
// // btnTest.style.padding = "15px 30px";

// appendTest.addEventListener("click", () => {
//   body.style.background = "black";
// });
// appendTest.style.borderRadius = "100px";
// appendTest.style.background = "none";

// appendTests.addEventListener("click", () => {
//   body.style.background = "white";
// });
// appendTests.style.borderRadius = "100px";
// appendTests.style.background = "none";





// 
// 
// 
// 
// 

// // Получаем элементы из DOM
// const taskInput = document.getElementById("taskInput");
// const addTaskButton = document.getElementById("addTaskButton");
// const taskList = document.getElementById("taskList");

// // Функция для добавления задачи
// addTaskButton.addEventListener("click", () => {
//   const taskText = taskInput.value.trim(); // Убираем пробелы по краям

//   if (taskText !== "") {
//     const listItem = document.createElement("li"); // Создаем элемент списка
//     listItem.textContent = taskText;

//     // Кнопка удаления
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Удалить";
//     deleteButton.addEventListener("click", () => {
//       taskList.removeChild(listItem); // Удаляем задачу
//     });

//     listItem.appendChild(deleteButton); // Добавляем кнопку в элемент списка
//     taskList.appendChild(listItem); // Добавляем элемент списка в ul

//     taskInput.value = ""; // Очищаем поле ввода
//   }
// });
