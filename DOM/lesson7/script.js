let btn = document.querySelector(".btn");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

btn.addEventListener("click", () => {
  setTimeout(() => {
    red.style.background = "red";
  }, 1000);

  setTimeout(() => {
    red.style.background = "gray";
    yellow.style.background = "yellow";
  }, 2000);

  setTimeout(() => {
    yellow.style.background = "gray";
    green.style.background = "green";
  }, 3000);

  setTimeout(() => {
    green.style.background = "gray";
  }, 4000);
});

