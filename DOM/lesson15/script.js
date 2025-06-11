const inputUrl = document.querySelector(".url");
const inputName = document.querySelector(".name");
const inputDes = document.querySelector(".description");
const inputPrice = document.querySelector(".price");
const products = document.querySelector(".products");
const create = document.querySelector(".create");
const createNav = document.querySelector(".create-nav");
const proNav = document.querySelector(".product-nav");
const addBtn = document.querySelector(".add");
const blocks = document.querySelector(".blocks");

products.style.display = "none";

createNav.addEventListener("click", () => {
  products.style.display = "none";
  create.style.display = "flex";
});

proNav.addEventListener("click", () => {
  products.style.display = "block";
  create.style.display = "none";
});

function addPro() {
  if (
    inputDes.value.trim() === "" ||
    inputName.value.trim() === "" ||
    inputPrice.value.trim() === "" ||
    inputUrl.value.trim() === ""
  ) {
    alert("404");
  } else {
    let res = JSON.parse(localStorage.getItem("block")) || [];
    let newPro = {
      id: 1,
      url: inputUrl.value,
      name: inputName.value,
      des: inputDes.value,
      price: inputPrice.value,
      rate: Math.round(Math.random() * 5),
    };
    let result = [...res, newPro];
    localStorage.setItem("block", JSON.stringify(result));
  }

  inputDes.value = "";
  inputName.value = "";
  inputPrice.value = "";
  inputUrl.value = "";
  view();
}

function view() {
  blocks.innerHTML = "";
  let res = JSON.parse(localStorage.getItem("block")) || [];
  res.map((el) => {
    blocks.innerHTML += `
     <div class="block">
    ${
      el.price > 500
        ? `<img src="./img/sale.png" alt="" class="sale"></img>`
        : ""
    }
            <a class="del" href="#"><ion-icon name="close-circle-outline"></ion-icon></a>
              <img src="${el.url}" alt="">
              <h1>${el.name}</h1>
              <p>${el.des.slice(0, 70)}</p>
              <div class="rate">
              <div class="star" style="background: ${
                el.rate > 0 ? "yellow" : "gray"
              }"></div>
              <div class="star" style="background: ${
                el.rate > 1 ? "yellow" : "gray"
              }"></div>
              <div class="star" style="background: ${
                el.rate > 2 ? "yellow" : "gray"
              }"></div>
              <div class="star" style="background: ${
                el.rate > 3 ? "yellow" : "gray"
              }"></div>
              <div class="star" style="background: ${
                el.rate > 4 ? "yellow" : "gray"
              }"></div>
            </div>
            <h2 style="color: red">${el.price}</h2>
              ${
                el.price > 500
                  ? `<h2 style="text-decoration: line-through">${el.price}</h2>`
                  : ""
              }
            </div>
    `;
  });
  delBtn();
}

function delBtn() {
  let res = JSON.parse(localStorage.getItem("block")) || [];
  let button = document.querySelectorAll(".del");
  button.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      res = res.filter((el, index) => {
        return idx !== index;
      });
      localStorage.setItem("block", JSON.stringify(res));
      view();
    });
  });
}

delBtn();
view();

addBtn.addEventListener("click", () => addPro());
