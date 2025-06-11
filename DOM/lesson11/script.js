let inputEmail = document.querySelector(".email");
let btn = document.querySelector(".add");
let title = document.querySelector(".title");
let Email1 = document.querySelector("email1")



loadTask();
function task1() {
  let task = inputEmail.value.trim();
  if (task) {
    task2(task);
    inputEmail.value = "";
    Email1.value.innerHTML = ` <img src="${Email1.value}" alt="" width = "50"> `;
    task3();
  } else {
    alert("пустой ячейканы толтурунуз");
  }
}

btn.addEventListener("click", task1);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    task1()
  }
})


function task2(task) {
  let li = document.createElement("li");
  li.innerHTML = task;
  title.appendChild(li);
}

function task3() {
  let tasks = [];
  title.querySelectorAll("li").forEach(function (el) {
    tasks.push(el.innerHTML.trim());
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task2);
}