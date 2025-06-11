let btn = document.querySelector(".add");
let inputTitle = document.querySelector(".main");
let inputPrice = document.querySelector(".main2");
let inputUrl = document.querySelector(".main3");
let list = document.querySelector(".list");

function addTodo() {
  if (
    inputTitle.value.trim() === "" ||
    inputPrice.value.trim() === "" ||
    inputUrl.value.trim() === ""
  ) {
    alert("404");
  } else {
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    const newTodo = {
      id: task.length ? task[task.length - 1].id + 1 : 1,
      title: inputTitle.value,
      price: inputPrice.value,
      img: inputUrl.value,
    };

    let result = [...task, newTodo];
    localStorage.setItem("todo", JSON.stringify(result));
    inputTitle.value = "";
    inputPrice.value = "";
    inputUrl.value = "";
    getTodo();
  }
}

function getTodo() {
  list.innerHTML = "";
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  task.map((el) => {
    list.innerHTML += `
           <tr>
            <th>${el.id}</th>
            <th>${el.title}</th>
            <th>${el.price}</th>
            <th><img src="${el.img}" alt="">${el.img}</th>
            <th><button class="del-btn btn btn-danger">Delete</button></th>
        </tr>
        `;
  });
  deleteBtn();
}

function deleteBtn() {
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  let btn = document.querySelectorAll(".del-btn");
  btn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      task = task.filter((el, idx) => idx !== index);
    });
  });
  localStorage.setItem("todo", JSON.stringify(task));
  getTodo();
}

deleteBtn();
getTodo();

btn.addEventListener("click", addTodo);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
