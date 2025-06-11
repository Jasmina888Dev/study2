const block = document.querySelector(".block");
const hero = document.querySelector(".hero");
const moreBtn = document.querySelector(".moreBtn");
const delBtn = document.querySelector(".delBtn");
let select = document.querySelector(".select");
let sort = document.querySelector(".sort");
let ssort = [];
let countryDate = [];
let count = 0;

function getCountry() {
  axios(`https://restcountries.com/v3.1/all`).then((res) => {
    countryDate = res.data;
    ssort = [...res.data];
    countryAll(countryDate);
  });
}

getCountry();

moreBtn.addEventListener("click", () => {
  count += 3;
  countryAll(ssort);
});

delBtn.addEventListener("click", () => {
  count -= 3;
  countryAll(ssort);
});

select.addEventListener("change", (event) => {
  let result = [];
  switch (event.target.value) {
    case "Asia":
      result = countryDate.filter((el) => el.region === "Asia");
      break;
    case "Americas":
      result = countryDate.filter((el) => el.region === "Americas");
      break;
    case "Europe":
      result = countryDate.filter((el) => el.region === "Europe");
      break;
    case "Africa":
      result = countryDate.filter((el) => el.region === "Africa");
      break;
    case "Antarctic":
      result = countryDate.filter((el) => el.region === "Antarctic");
      break;
    case "Oceania":
      result = countryDate.filter((el) => el.region === "Oceania");
      break;
    default:
      result = [...countryDate];
      break;
  }
  ssort = result;
  count = 3;
  countryAll(ssort);
});

sort.addEventListener("change", (event) => {
  let sortedData = [...ssort];
  switch (event.target.value) {
    case "area":
      sortedData.sort((a, b) => b.area - a.area);
      break;
    case "population":
      sortedData.sort((a, b) => a.population - b.population);
      break;
    case "a-z":
      sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
      break;
    case "z-a":
      sortedData.sort((a, b) => b.name.common.localeCompare(a.name.common));
      break;
  }
  countryAll(sortedData);
});

function countryAll(data) {
  hero.innerHTML = "";
  data.slice(0, count).map((el) => {
    hero.innerHTML += `
        <div class="cards">
          <img src="${el.flags.svg}" alt="Flag of ${el.name.common}">
          <h2>${el.name.common}</h2>
          <h1>${el.region}</h1>
          <div class="card-text">
            <h3>Area: ${el.area} km²</h3>
            <h3>Population: ${el.population}</h3>
          </div>
          <a href="${el.maps.googleMaps}" target="_blank">Maps!</a>
        </div>
      `;
  });
}
