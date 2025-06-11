// Promise:

// let https = 250;

// let promise = new Promise((resolve, reject) => {
//     console.log("Pending...");
//   if (https >= 200 && https <= 299) {
//     resolve({ id: 1, name: "Bill" });
//   } else {
//     reject({ id: 2, name: "Vector" });
//   }
// });
// promise.then((res) => {
//     console.log(res);
// })
// promise.catch((res) => {
//     console.log(res);
// })
// promise.finally(() => {
//     console.log("Finish!");
// })

// pending - ожидание
// resolve - выполнено 
// reject - выполнено с ошибкой

//////////////////////////////////////////
// Коды состояния ответа HTTP:
// Информационные ответы (100 – 199)
// Успешные ответы (200 – 299)
// Сообщения о перенаправлении (300 – 399)
// Ошибки клиента (400 – 499)
// Ошибки сервера (500 – 599)
//////////////////////////////////////////

// API

//////////////////////////////////////////
// Какие бывают запросы в API?
// GET.
// POST.
// PUT.
// PATCH.
// DELETE.
//////////////////////////////////////////

const block = document.querySelector(".block");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    block.innerHTML = "";
    data.forEach((el, idx) => {
      let border =
        idx % 2 === 0
          ? "4px solid blue" 
          : "4px solid red"
          let shadow = idx % 2 === 0 ? "0px 0px 8px blue" : "0px 0px 8px red";
      block.innerHTML += `
          <div class="blocks" style=" border:${border};box-shadow: ${shadow}">
           <img src="./img/user.png" alt="#">
            <h1>${el.id}
            </h1>
            <h2>${el.name}</h2>
            <h3>${el.username}</h3>
            <a href="">${el.email}</a>
            <h3>${el.phone}</h3>
            <a href="">${el.website}</a>
          </div>
        `;
    });
  });

