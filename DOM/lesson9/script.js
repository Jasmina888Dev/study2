let main = document.querySelector(".main");
let add = document.querySelector(".add");
let list = document.querySelector(".the");
let info = document.querySelector("h4");
let btn = document.querySelector(".loading");
let main2 = document.querySelector(".main2");

let count = 0;
btn.style.display = "none";
function task() {
  btn.style.display = "block";
  setTimeout(() => {
    if (main.value.trim() === "" && main2.value.trim() === "") {
      info.innerHTML = "Error!";
      info.style.color = "red";
    } else {
      count++;
      list.innerHTML += `  <tr>
          <th scope="row">${count}</th>
          <td>    
           <img src="${main.value}" alt="" width = "50">
          </td>
          <td>${main2.value}</td> 
          <td>
          <button class = "btn btn-danger">Delete</button>
          </td>
        </tr>`;
      main.value = "";
      main2.value = "";
      info.innerHTML = "";
    }
    btn.style.display = "none";
  }, 2000);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    task();
  }
});

add.addEventListener("click", () => task());

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    event.target.parentNode.parentNode.remove();
  }
});
