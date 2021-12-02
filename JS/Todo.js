const writeForm = document.querySelector(".writeForm");
const writeTodo = document.querySelector(".writeTodo");
const todoList = document.querySelector(".todoList");

const deleteList = (event) => {
  console.log(event);
  const clickTarget = event.target.parentElement;
  clickTarget.remove();
};

const paintList = (listValue) => {
  const listDiv = document.createElement("div");
  const listSpan = document.createElement("span");
  const listBtn = document.createElement("button");

  listSpan.innerText = listValue;
  listBtn.innerText = "X";
  listBtn.addEventListener("click", deleteList);

  todoList.appendChild(listDiv);
  listDiv.appendChild(listSpan);
  listDiv.appendChild(listBtn);
};

const textSubmit = (event) => {
  event.preventDefault();
  const listValue = writeTodo.value;
  writeTodo.value = "";
  paintList(listValue);
};

writeForm.addEventListener("submit", textSubmit);
