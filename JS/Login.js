const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginName");
const userText = document.querySelector(".welcomeText");

const HIDDEN_CLASSNAME = "hidden";
const NAME_KEY = "name";

const loginSubmitHandle = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(NAME_KEY, loginInput.value);
  userMessage();
};

const userMessage = () => {
  const username = localStorage.getItem(NAME_KEY);
  userText.innerText = `hello ${username}`;
  userText.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", loginSubmitHandle);

if (localStorage.getItem(NAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  userMessage();
}
