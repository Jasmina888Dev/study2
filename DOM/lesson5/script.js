let box = document.querySelector(".box");
let btnTop = document.querySelector(".btnTop");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let btnBottom = document.querySelector(".btnBottom");

box.style.position = "absolute";
box.style.left = "150px";
box.style.top = "150px";

btnLeft.addEventListener("click", () => {
  let leftPx = parseInt(box.style.left);
  box.style.left = leftPx - 10 + "px";
});

btnRight.addEventListener("click", () => {
  let leftPx = parseInt(box.style.left);
  box.style.left = leftPx + 10 + "px";
});

btnTop.addEventListener("click", () => {
  let topx = parseInt(box.style.top);
  box.style.top = topx - 10 + "px";
});

btnBottom.addEventListener("click", () => {
  let topx = parseInt(box.style.top);
  box.style.top = topx + 10 + "px";
});

document.addEventListener("keydown", (event) => {
  let topx = parseInt(box.style.top);
  let leftPx = parseInt(box.style.left);
  if (event.key === "ArrowUp") {
    box.style.top = topx - 10 + "px";
  } else if (event.key === "ArrowDown") {
    box.style.top = topx + 10 + "px";
  } else if (event.key === "ArrowRight") {
    box.style.left = leftPx + 10 + "px";
  } else if (event.key === "ArrowLeft") {
    box.style.left = leftPx - 10 + "px";
  } else {
    ("error");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "s") {
    box.style.transform = "rotate(-90deg)";
  } else if (event.key === "d") {
    box.style.transform = "rotate(-180deg)";
  } else if (event.key === "w") {
    box.style.transform = "rotate(90deg)";
  } else if (event.key === "s") {
    box.style.transform = "rotate(-180deg)";
  } else if (event.key === "a") {
    box.style.transform = "rotate(0)";
  }
});
