const btn = document.querySelector(".add");
const inputTitle = document.querySelector(".main");
const inputUrl = document.querySelector(".main2");
const inputPrace = document.querySelector(".main3");
const list = document.querySelector(".list");

function addTodo() {
  if (
    inputTitle.value.trim() === "" ||
    inputUrl.value.trim() === "" ||
    inputPrace.value.trim() === ""
  ) {
    alert("404");
  } else {
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    const newTodo = {
      id: task.length ? task[task.length - 1].id + 1 : 1,
      title: inputTitle.value,
      img: inputUrl.value,
      prace: inputPrace.value,
    };

    const result = [...task, newTodo];
    localStorage.setItem("todo", JSON.stringify(result));
    inputPrace.value = "";
    inputTitle.value = "";
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
            <td> ${el.id}</td>
            <td> ${el.title}</td>
            <td>${el.prace}</td>
            <td><img  width = '50' src="${el.img} " alt="${el.title}"></td>
           <td> <button class= "del-btn btn btn-danger">Delete</button> </td>
        </tr>
`;
  });
  deleteBtn();
}
getTodo();

function deleteBtn() {
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  const butttons = document.querySelectorAll(".del-btn");
  butttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      task = task.filter((el, idx) => {
        return idx !== index;
      });
      localStorage.setItem("todo", JSON.stringify(task));
      getTodo();
    });
  });
}
deleteBtn();

btn.addEventListener("click", addTodo);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
