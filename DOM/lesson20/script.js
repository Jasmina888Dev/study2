const breeds = document.querySelector(".breeds");
const breedsImg = document.querySelector(".breeds-img");
const input = document.querySelector(".input");

function getBreedsAll() {
  axios(`https://dog.ceo/api/breeds/list/all`).then((res) => {
    Object.keys(res.data.message).map((el) => {
      breeds.innerHTML += `
    <button class="breeds-btn">${el}</button>
    `;
    });
  });
}

getBreedsAll();

function handlChangeImg() {
  const allBtn = document.querySelectorAll(".breeds-btn");
  console.log(allBtn);

  allBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      getBreedsImg(btn.textContent);
    });
  });
}

setTimeout(() => {
  handlChangeImg();
}, 2000);

function getBreedsImg(name) {
  axios(`https://dog.ceo/api/breed/${name}/images/random`).then((res) => {
    breedsImg.innerHTML = `<img src="${res.data.message}" alt="img"/>`;
  });
}
getBreedsImg();

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
      getBreedsImg(input.value);
    input.value = "";
  }
});
