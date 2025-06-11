let inputEmail = document.querySelector(".email");
let inputPass = document.querySelector(".pass");
let btn = document.querySelector(".add");
let title = document.querySelector("h4");
let form = document.querySelector(".form");

title.style.fontSize = "20px";
let count = 4;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    inputEmail.value === "Motionweb@gmail.com" &&
    inputPass.value === "12345"
  ) {
    title.innerHTML = "доступ открыт";
    title.style.color = "green";
    inputEmail.style.border = "2px solid green";
    inputPass.style.border = "2px solid green";
    inputEmail.style.boxShadow = "0px 1px 17px green";
    inputPass.style.boxShadow = "0px 1px 17px green";
  } else if (inputEmail.value === "" && inputPass.value === "") {
    title.innerHTML = "заполните пустой ячейки!";
    title.style.color = "red";
    inputEmail.style.border = "2px solid red";
    inputPass.style.border = "2px solid red";
    inputEmail.style.boxShadow = "0px 1px 17px red";
    inputPass.style.boxShadow = "0px 1px 17px red";
  }  else {
    title.innerHTML = "error!";
    title.style.color = "red";
    count--;
    title.innerHTML = `у вас осталось ${count} попытки`;
    inputEmail.value = "";
    inputPass.value = "";
    inputEmail.style.border = "2px solid red";
    inputPass.style.border = "2px solid red";
    inputEmail.style.boxShadow = "0px 1px 17px red";
    inputPass.style.boxShadow = "0px 1px 17px red";
  } 
});
