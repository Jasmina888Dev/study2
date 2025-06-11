const name = document.querySelector(".name");
const email = document.querySelector(".email");
const url = document.querySelector(".imgUrl");
const createbtn = document.querySelector(".create-btn");
const read = document.querySelector(".read");
const block2 = document.querySelector(".block2");

function add() {
  let res = JSON.parse(localStorage.getItem("create")) || [];
  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    url.value.trim() === ""
  ) {
    alert("error404!");
  } else {
    let newPro = {
      name: name.value,
      email: email.value,
      url: url.value,
    };
    let result = [...res, newPro];
    localStorage.setItem("create", JSON.stringify(result));
  }
  view();
}

view();

function view() {
  let res = JSON.parse(localStorage.getItem("create")) || [];
  block2.innerHTML = "";
  res
    .slice()
    .reverse()
    .forEach((el) => {
      block2.innerHTML += `
       <div class="block2-box">
               <img src="${el.url}" alt="" />
            <div class="text">
              <h1>name: <span>${el.name}</span></h1>
              <h1>email: <span>${el.email}</span></h1>
            </div>
            <button class="del-btn">delete</button>
         </div>
      `;
    });
  name.value = "";
  email.value = "";
  url.value = "";
}
createbtn.addEventListener("click", () => {
  add();
  delBtn();
});

function delBtn() {
  let res = JSON.parse(localStorage.getItem("create")) || [];
  let dell = document.querySelectorAll(".del-btn");
  dell.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      result = res.filter((el, index) => {
        return idx !== index;
      });
      localStorage.setItem("create", JSON.stringify(result));
      view();
    });
  });
}
delBtn();

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add();
  }
});

read.addEventListener("click", () => {
  if (block2.style.opacity === "0") {
    block2.style.opacity = "1";
  } else {
    block2.style.opacity = "0";
  }
});
