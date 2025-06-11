const products = document.querySelector(".products");
const logo = document.querySelector(".logo");
const favNav = document.querySelector(".favNav");
const favorite = document.querySelector(".favorite");
const favoriteBlocks = document.querySelector(".favorite-blocks");
const totalPrice = document.querySelector(".total-price");
const total = document.querySelector(".total-price h2");
const deleteAll = document.querySelector(".favorite-right button");
const favrigrht = document.querySelector(".favorite-right");
const count = document.querySelector(".count");

favorite.style.display = "none";
favNav.addEventListener("click", () => {
  products.style.display = "none";
  favorite.style.display = "flex";
  viewFav();
});

logo.addEventListener("click", () => {
  products.style.display = "flex";
});

fetch(`https://fakestoreapi.com/products`)
  .then((res) => res.json())
  .then((data) => getPro(data));

function getPro(productAll) {
  productAll.map((el) => {
    products.innerHTML += `
          <div class="block">
                <a href="#" class="like"><ion-icon name="heart"></ion-icon></a>
                <img src="${el.image}" alt="">
                <h1>${el.title}</h1>
                <h2>${el.category}</h2>
                <div class="rate">
                    <div class="star" style="background: ${
                      el.rating.rate > 0 ? "yellow" : "gray"
                    };"></div>
                    <div class="star" style="background: ${
                      el.rating.rate > 1 ? "yellow" : "gray"
                    };"></div>
                    <div class="star" style="background: ${
                      el.rating.rate > 2 ? "yellow" : "gray"
                    };"></div>
                    <div class="star" style="background: ${
                      el.rating.rate > 3 ? "yellow" : "gray"
                    };"></div>
                    <div class="star" style="background: ${
                      el.rating.rate > 4 ? "yellow" : "gray"
                    };"></div>
                </div>
                <h4>${el.price}</h4> 
            </div>
            `;
    addFav(productAll);
    viewFav();
  });
}

function addFav(product) {
  favoriteBlocks.innerHTML = "";
  let res = JSON.parse(localStorage.getItem("favorite")) || [];
  const linkLike = document.querySelectorAll(".like");
  linkLike.forEach((like, index) => {
    like.addEventListener("click", () => {
      like.style.color = "red";
      let find = product.find((el, idx) => {
        return index === idx;
      });

      res.push(find);
      localStorage.setItem("favorite", JSON.stringify(res));
      viewFav();
    });
  });
  let totalPri = res.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
  total.innerHTML = `Итоги:${totalPri}$`;
}

function viewFav() {
  favoriteBlocks.innerHTML = "";
  let res = JSON.parse(localStorage.getItem("favorite")) || [];
  res.length
    ? res.map((el) => {
        favoriteBlocks.innerHTML += `
     <div class="blocks">
              <img src="${el.image}" alt="" />      
              <div class="block-text">
                <p>${el.title}</p>
                <h2>${el.category}</h2>
                <div class="block2">
                  <a href="#" class="likess"><ion-icon name="heart-outline"></ion-icon></a>
                  <a href="#" class="del-btn"><ion-icon name="trash-outline"></ion-icon></a>
                </div>
              </div>
              <div class="price">
                <h5>с WB Кошельком</h5>
                <h3>${el.price}</h3>
              </div>
            </div> 
  `;
      })
    : (favorite.innerHTML = `   <img src="./img/Empty-PNG.png" alt="#">`);
  favrigrht.style.display = res.length ? "flex" : "none";

  count.innerHTML = res.length;
}
viewFav();

deleteAll.addEventListener("click", () => {
  localStorage.removeItem("favorite");
  viewFav();
});
