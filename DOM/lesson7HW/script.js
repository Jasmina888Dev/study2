let btn = document.querySelector(".btn");

let blok1 = document.querySelector(".bloks1 .blok1");
let blok11 = document.querySelector(".bloks1 .blok11");

let blok2 = document.querySelector(".bloks2 .blok2");
let blok22 = document.querySelector(".bloks2 .blok22");

blok1.style.position = "absolute";
blok11.style.position = "absolute";
blok2.style.position = "absolute";
blok22.style.position = "absolute";

blok1.style.right = "1630px";
blok11.style.right = "1555px";
blok2.style.bottom = "848px";
blok22.style.bottom = "780px";

blok1.style.transition = "all 2s ease";
blok11.style.transition = "all 2s ease";
blok2.style.transition = "all 2s ease";
blok22.style.transition = "all 2s ease";

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok22.style.transition = "1.2s";
    blok22.style.bottom = "160px";
  }, 1000);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok11.style.transition = "1.2s";
    blok11.style.right = "850px";
  }, 1500);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok2.style.transition = "1.2s";
    blok2.style.bottom = "600px";
  }, 1500);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok11.style.transition = "1.2s";
    blok11.style.right = "50px";
    blok11.style.zIndex = "1";
  }, 2300);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok1.style.transition = "1.2s";
    blok1.style.right = "940px";
  }, 2500);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok2.style.transition = "1.2s";
    blok2.style.bottom = "240px";
  }, 3500);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    blok1.style.zIndex = "1";
    blok1.style.transition = "1.2s";
    blok1.style.right = "140px";
  }, 5000);
});
