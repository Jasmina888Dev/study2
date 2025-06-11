// DOM - bom
// let btn = document.querySelector("button");
// let text = document.querySelector("h1");
// btn.style.background = "white";
// btn.style.transition = "0.7s";

// btn.addEventListener("click", () => {
//   if (btn.style.background === "white") {
//     btn.style.background = "yellow";
//   } else {
//     btn.style.background = "white";
//   }
// });

// text.addEventListener("mouseover", () => {
//   text.style.color = "red";
//   btn.style.background = "pink";
//   btn.style.fontSize = "25px";
// });

// text.addEventListener("mouseout", () => {
//   text.style.color = "black";
//   btn.style.background = "white";
//   btn.style.fontSize = "";
// });


// ---------------------1
// let task = document.querySelector(".blok");
// let task1 = document.querySelector(".btn");
// task.style.background = "white";

// task1.addEventListener("click", () => {
//   if (task.style.background === "white") {
//     task.style.background = "red";
//   } else {
//     task.style.background = "white";
//   }
// });
// -----------------------1




// ----------------------------2

const counterElement = document.querySelector('.counter');
const incrementButton = document.querySelector('.plus');
const decrementButton = document.querySelector('.minus');

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counterElement.textContent = count;
});

// ------------------------------------2





// --------------------3


// DOM элементтерин табуу
// const redLight = document.getElementById('red');
// const yellowLight = document.getElementById('yellow');
// const greenLight = document.getElementById('green');
// const startButton = document.getElementById('startButton');

// let currentLight = 0; // 0: кызыл, 1: сары, 2: жашыл
// let interval;

// // Светофордун абалын өзгөртүү
// function updateTrafficLight() {
//   // Бардык жарыктарды өчүрүү
//   redLight.classList.remove('red');
//   yellowLight.classList.remove('yellow');
//   greenLight.classList.remove('green');

//   // Учурдагы жарыкты күйгүзүү
//   if (currentLight === 0) {
//     redLight.classList.add('red');
//   } else if (currentLight === 1) {
//     yellowLight.classList.add('yellow');
//   } else if (currentLight === 2) {
//     greenLight.classList.add('green');
//   }

//   // Кийинки абалга өтүү
//   currentLight = (currentLight + 1) % 3; // 0 -> 1 -> 2 -> 0
// }

// // Светофорду баштоо
// startButton.addEventListener('click', () => {
//   if (interval) {
//     clearInterval(interval); // Эгер мурдагысы иштеп жатса, токтотуу
//   }
//   interval = setInterval(updateTrafficLight, 1000); // Ар 1 секундада өзгөртүү
// });



// ----------------3