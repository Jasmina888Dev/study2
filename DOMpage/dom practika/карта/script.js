let inputName = document.querySelector("#name"); 
let labelName = document.querySelector(".name"); 
let inputNumber = document.querySelector("#number"); 
let labelNamber = document.querySelector(".number"); 
let inputDate = document.querySelector("#date"); 
let lableDate = document.querySelector(".date"); 
let list = document.querySelector(".list"); 
let btn = document.querySelector(".awesome-button"); 
let check = document.querySelector(".check"); 
let login = document.querySelector(".login") 
let info = document.querySelector("h4") 
let addBlock = document.querySelector(".add-block") 
 
inputName.addEventListener("click", () => { 
 labelName.style.bottom = "25px"; 
 labelName.style.fontSize = "15px"; 
}); 
inputNumber.addEventListener("click", () => { 
 labelNamber.style.bottom = "25px"; 
 labelNamber.style.fontSize = "15px"; 
}); 
inputDate.addEventListener("click", () => { 
 lableDate.style.bottom = "25px"; 
 lableDate.style.fontSize = "15px"; 
}); 
 
login.style.display = "none" 
function addNewCard() { 
 if (inputDate.value === "" || inputNumber.value === "") { 
  info.innerHTML = "заполнить!" 
  info.style.color = "red" 
  labelName.style.color = " red"; 
  labelNamber.style.color = " red"; 
  lableDate.style.color = " red"; 
 } 
 else { 
  labelName.style.color = ""; 
  labelNamber.style.color = ""; 
  lableDate.style.color = " "; 
  info.innerHTML = "". 
   setTimeout(() => { 
    login.style.display = "none" 
    NewList.style.display = "block" 
   }, 1000) 
  login.style.display = "block" 
  let getDate = JSON.parse(localStorage.getItem("card")) || []; 
  let newCard = { 
   id: 1, 
   name: inputName.value, 
   namber: inputNumber.value, 
   date: inputDate.value, 
  }; 
  let result = [...getDate, newCard]; 
  localStorage.setItem("card", JSON.stringify(result)); 
  inputName.value = ""; 
  inputNumber.value = ""; 
  inputDate.value = ""; 
  view(); 
 
 } 
} 
function view() { 
 list.innerHTML = ""; 
 let getDate = JSON.parse(localStorage.getItem("card")) || []; 
 getDate.map((el) => { 
  let NewNumber = el.namber; 
  NewNumber = NewNumber.slice(0, 4) + "-" + NewNumber.slice(4, 8) + "-" + NewNumber.slice(8, 12) + "-" + NewNumber.slice(12, 16); 
  let NewDate = el.date; 
  NewDate = NewDate.slice(0, 2) + "/" + NewDate.slice(2, 4) 
 
  if (NewNumber[0] === "4") { 
   list.innerHTML += ` 
   <div class="NewVisa"> 
    <img src="./img/visa.svg" alt="img" class="visa"> 
    <h1>${NewNumber}</h1> 
    <div class="Visa-text"> 
     <h3>Name</h3> 
     <h3>Valid Till</h3> 
    </div> 
    <div class="text-Visa"> 
     <h2>${el.name}</h2> 
     <h2>${NewDate}</h2> 
    </div> 
   </div> 
  `; 
  } else { 
   list.innerHTML += ` 
   <div class="NewList"> 
    <img src="./img/Logo.svg" alt="img" class="logo"> 
    <h1>${NewNumber}</h1> 
    <div class="text-Logo"> 
     <h3>Name</h3> 
     <h3>Valid Till</h3> 
    </div> 
    <div class="Logo-text"> 
     <h2>${el.name}</h2> 
     <h2>${NewDate}</h2> 
    </div> 
   </div> 
  `; 
  } 
 
 
 
 }); 
} 
view(); 
btn.addEventListener("click", () => { 
 
 addNewCard() 
 
});
