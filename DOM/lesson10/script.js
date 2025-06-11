let url = document.querySelector(".url");
let title = document.querySelector(".title");
let price = document.querySelector(".price");
let btn = document.querySelector(".save");
let blocks = document.querySelector(".blocks");
let load = document.querySelector(".load");
let blok1 = document.querySelector(".blok1");
let blok1Title = document.querySelector(".blok1 h4");

let count = 0;

load.style.display = "none";

function onProduct() {
  if (
    url.value.trim() === "" ||
    title.value.trim() === "" ||
    price.value.trim() === ""
  ) {
    alert("error");
  } else {
    load.style.display = "block";
    setTimeout(() => {
      load.style.display = "none";
      count++;
      blocks.innerHTML += `
    <div class="block">
    <h3 class="count">${count}</h3>
    <img src="${url.value}" alt="img">
    <h3>${title.value}</h3>
    <h3>${price.value}</h3>
    <button class="delete">Delete</button>
    </div>
    `;

      url.value = "";
      title.value = "";
      price.value = "";
    }, 500);
  }
}

btn.addEventListener("click", () => onProduct());

blocks.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
});

blok1.style.transition = "2s";
btn.addEventListener("click", () => {
  blok1.style.transform = "translateY(-550px)";
  setTimeout(() => {
    blok1Title.innerHTML = "true";
  }, 2000);
  blok1.style.transform = "translateY(-850px)";
});
