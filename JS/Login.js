const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginName");
const userText = document.querySelector(".welcomeText");
const hideForm = document.querySelector(".writeForm");

const HIDDEN_CLASSNAME = "hidden";
const NAME_KEY = "name";

const showInput = () => {
  if (localStorage.getItem("name") === null) {
    hideForm.classList.add("hidden");
  } else {
    hideForm.classList.remove("hidden");
  }
};

showInput();

const loginSubmitHandle = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(NAME_KEY, loginInput.value);
  userMessage();
  showInput();
};

const userMessage = () => {
  const username = localStorage.getItem(NAME_KEY);
  userText.innerText = `${username}님의 기억을 담아보세요`;
  userText.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", loginSubmitHandle);

if (localStorage.getItem(NAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  userMessage();
}
