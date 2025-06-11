const inputName = document.querySelector("#name");
const inputNumber = document.querySelector("#number");
const inputDate = document.querySelector("#date");
const saveBtn = document.querySelector(".save");
const blocks = document.querySelector(".blocks");
const labelName = document.querySelector(".name");
const labelNumber = document.querySelector(".number");
const labelDate = document.querySelector(".date");
const loading = document.querySelector(".loading");

inputName.addEventListener("click", () => {
  labelName.style.bottom = "37px";
  labelName.style.fontSize = "16px";
});

inputNumber.addEventListener("click", () => {
  labelNumber.style.bottom = "37px";
  labelNumber.style.fontSize = "16px";
});

inputDate.addEventListener("click", () => {
  labelDate.style.bottom = "37px";
  labelDate.style.fontSize = "16px";
});

function addCard() {
  if (
    inputNumber.value.trim() === "" ||
    inputName.value.trim() === "" ||
    inputDate.value.trim() === ""
  ) {
    alert("404");
  } else if (inputNumber.value.length <= 15) {
    alert("max-length=16");
  } else if (
    inputNumber.value.split("").filter((el) => /^[a-zA-Z]$/.test(el)).length > 0
  ) {
    alert("NaN");
  } else {
    let res = JSON.parse(localStorage.getItem("card")) || [];
    let newCard = {
      id: Date.now(),
      name: inputName.value,
      number: String(inputNumber.value),
      date: new Date().toLocaleDateString(),
    };

    res.push(newCard);
    localStorage.setItem("card", JSON.stringify(res));
  }

  inputDate.value = "";
  inputName.value = "";
  inputNumber.value = "";

  viewCard();
}

viewCard();
function viewCard() {
  loading.style.display = "block";
  setTimeout(() => {
    blocks.innerHTML = "";
    let res = JSON.parse(localStorage.getItem("card")) || [];
    res.slice()
      .reverse()
      .map((el) => {
        blocks.innerHTML += `
      <div class="block">
 <img src="${
   el.number[0] == "4"
     ? "./dom.img/visa.png"
     : el.number[0] == "1"
     ? "./dom.img/mbank1.png"
     : "./dom.img/card.png"
 }" alt="" width="85px">
 
                  <h1>${
                    el.number.slice(0, 4) +
                    "-" +
                    el.number.slice(4, 8) +
                    "-" +
                    el.number.slice(8, 12) +
                    "-" +
                    el.number.slice(12, 16)
                  }</h1>
                  <div class="block-text">
                    <h2>Name  <br> <span>${el.name} </span></h2>
                    <h2>Valid Till  <br> <span>${
                      el.date.slice(0, 2) + "/" + el.date.slice(2, 5)
                    }</span></h2>
                    <button class="del-btn">X</button>
                  </div>
                </div>
    `;
        delBtn();
      });
    loading.style.display = "none";
  }, 2000);
}

function delBtn() {
  let buttons = document.querySelectorAll(".del-btn");
  let res = JSON.parse(localStorage.getItem("card")) || [];

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      res = res.filter((el, idx) => {
        return idx !== index;
      });
      localStorage.setItem("card", JSON.stringify(res));
      viewCard();
    });
  });
}

delBtn();

saveBtn.addEventListener("click", () => addCard());

//  <img src="${
//                     el.number[0] == 4 ? "./img/visa.png" : "./img/logo.svg"
//                   }" alt="" width="70px">
