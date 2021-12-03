const writeForm = document.querySelector(".writeForm");
const writeTodo = document.querySelector(".writeTodo");
const todoList = document.querySelector(".todoList");

let lists = [];

const saveList = () => {
  localStorage.setItem("todos", JSON.stringify(lists));
};

const deleteList = (event) => {
  const clickTarget = event.target.parentElement;
  clickTarget.remove();
  lists = lists.filter((data) => data.id !== parseInt(clickTarget.id));
  saveList();
};

const paintList = (listValue) => {
  const listDiv = document.createElement("div");
  const listSpan = document.createElement("span");
  const listBtn = document.createElement("button");

  listDiv.classList.add("listDiv");
  listSpan.classList.add("listSpan");
  listBtn.classList.add("listBtn");

  listDiv.id = listValue.id;
  listSpan.innerText = listValue.text;
  listBtn.innerText = "삭제";
  listBtn.addEventListener("click", deleteList);

  todoList.appendChild(listDiv);
  listDiv.appendChild(listSpan);
  listDiv.appendChild(listBtn);
};

const loadingList = () => {
  const loadList = JSON.parse(localStorage.getItem("todos"));
  if (loadList !== null) {
    loadList.map((data) => {
      lists.push(data);
      paintList(data);
    });
  }
};

loadingList();

const textSubmit = (event) => {
  event.preventDefault();
  const listValue = { id: Date.now(), text: writeTodo.value };
  writeTodo.value = "";
  lists.push(listValue);
  paintList(listValue);
  saveList();
};

writeForm.addEventListener("submit", textSubmit);
