let btn1 = document.querySelector(".btn");
let menu = document.querySelector(".blok-img");
menu.style.display = "none";
btn1.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

let ip = document.querySelector(".input");
ip.addEventListener("click", () => {
  if (ip.style.background === "yellow") {
    ip.style.background = "green";
  } else {
    ip.style.background = "yellow";
  }
});






