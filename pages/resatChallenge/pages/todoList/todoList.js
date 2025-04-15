const todoInput = document.querySelector(".todoInput");
const todoPriority = document.querySelector(".todoPriority");
const todoAddBtn = document.querySelector(".todoAddBtn");

let inputText = "";
let priorityText = "";
let list = {};
let listArr = [];

// 리스트 입력

const todoListBox = document.querySelector(".todoListBox");

const handleTodoInput = (e) => {
  inputText = e.target.value;
};

const selectPriority = (e) => {
  priorityText = e.target.value;
};

const addList = () => {
  if (inputText === "") return alert("할 일을 작성해주세요");
  if (priorityText === "") return alert("우선순위를 지정해주세요");
  list.id = listArr.length;
  list.title = inputText;
  list.priority = priorityText;
  list.complete = false;
  listArr.push(list);
  resetInput();
  showList(listArr);
};

const resetInput = () => {
  list = {};
  inputText = "";
  priorityText = "";
  todoInput.value = "";
  todoPriority.value = "";
};

const handleCheckBox = (id, checked) => {
  const newArr = listArr.map((el) => {
    if (el.id === id) {
      el.complete = checked;
      return el;
    } else {
      return el;
    }
  });

  currentSort === "all"
    ? showList(newArr)
    : handleConditionSort(currentSort, newArr);
};

const showList = (arr) => {
  todoListBox.innerHTML = "";
  arr.forEach((list) => {
    const todoListWrap = document.createElement("li");
    todoListWrap.classList.add("todoListWrap");

    const todoCheckBox = document.createElement("input");
    const todoList = document.createElement("input");
    const priorityLabel = document.createElement("span");

    todoCheckBox.classList.add("todoCheckBox");
    todoList.classList.add("todoList");
    priorityLabel.classList.add("priorityLabel");

    todoCheckBox.setAttribute("type", "checkbox");
    if (list.complete) {
      todoCheckBox.setAttribute("checked", "");
    }

    todoList.setAttribute("type", "text");

    todoList.value = list.title;
    priorityLabel.innerText = list.priority;

    todoListBox.appendChild(todoListWrap);
    todoListWrap.appendChild(todoCheckBox);
    todoListWrap.appendChild(todoList);
    todoListWrap.appendChild(priorityLabel);

    todoCheckBox.addEventListener("click", () =>
      handleCheckBox(list.id, todoCheckBox.checked)
    );
  });
};

todoInput.addEventListener("input", handleTodoInput);
todoPriority.addEventListener("change", selectPriority);
todoAddBtn.addEventListener("click", addList);

// 리스트 정렬

let currentSort = "all";

const todoBtnAll = document.querySelector(".todoBtnAll");
const todoBtnComplete = document.querySelector(".todoBtnComplete");
const todoBtnIncomplete = document.querySelector(".todoBtnIncomplete");

const handleAllSort = () => {
  currentSort = "all";
  showList(listArr);
};

const handleConditionSort = (condition, list) => {
  currentSort = condition;
  const newList = list.filter((el) => el.complete === condition);
  showList(newList);
};

todoBtnAll.addEventListener("click", handleAllSort);
todoBtnComplete.addEventListener("click", () =>
  handleConditionSort(true, listArr)
);
todoBtnIncomplete.addEventListener("click", () =>
  handleConditionSort(false, listArr)
);
