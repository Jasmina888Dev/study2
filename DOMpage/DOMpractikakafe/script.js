

// 22222222222222222222
// let main = document.querySelector(".main");
// let add = document.querySelector(".add");
// let list = document.querySelector(".list");
// let info = document.querySelector("h4");
// let btn = document.querySelector(".loading");

// let count = 0;

// btn.style.display = "none";
// function task() {
//   if (main.value.trim() === "") {
//     info.innerHTML = "Error!";
//     info.style.color = "red";
//   } else {
//     count++;
//     list.innerHTML += `<li class="list list-group-item d-flex alight-items-center justify-content-between">${count}. ${main.value} <button class = "btn btn-danger ">Delete</button></li>`;
//     main.value = "";
//     info.innerHTML = "";
//   }
// }
// main.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     btn.style.display = "block";
//     setTimeout(() => {
//       task();
//       btn.style.display = "none";
//     }, 2000);
//   }
// });

// add.addEventListener("click", () => {
//   btn.style.display = "block";
//   setTimeout(() => {
//     task();
//     btn.style.display = "none";
//   }, 2000);
// });

// list.addEventListener("click", (event) => {
//   if (event.target.classList.contains("btn")) {
//     let li = event.target.parentNode;
//     li.remove();
//   }
// });
