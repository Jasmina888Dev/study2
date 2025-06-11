// const taskInput = document.getElementById("taskInput");
// const addButton = document.getElementById("addButton");
// const taskList = document.getElementById("taskList");

// addButton.addEventListener("click", () => {
//   const taskText = taskInput.value.trim();
//   if (taskText === "") return; // Не добавляем пустые задачи

//   const listItem = document.createElement("li");
//   listItem.textContent = taskText;

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Удалить";
//   deleteButton.style.marginLeft = "10px";

//   deleteButton.addEventListener("click", () => {
//     taskList.removeChild(listItem);
//   });

//   listItem.appendChild(deleteButton);
//   taskList.appendChild(listItem);

//   taskInput.value = ""; // Очищаем поле ввода
// });

// 222
// const button = document.getElementById("confettiButton");
// button.addEventListener("click", () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: { y: 0.6 },
//   });
// });
// 222

// 333
// script.js
document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskInput.value;

  // Add delete button
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete');
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  // Add the new task to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// 333
