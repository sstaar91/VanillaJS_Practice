import { addDefaultPath } from "../../../utils/addDefaultPath.js";

const logoBox = document.getElementsByClassName("logoBox")[0];
logoBox.addEventListener("click", (e) => {
  e.preventDefault();
  addDefaultPath(e.target.pathname);
});

const loginForm = document.querySelector(".westaLoginForm");
const loginBtn = document.querySelector(".westaLoginBtn");
const inputs = document.getElementsByClassName("westaLoginForm")[0];

const handleInput = function () {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidInput = checkValue(idValue, pwValue);

  handleBtn(isValidInput);
};

const checkValue = function (id, pw) {
  return id.includes("@") && pw.length >= 5;
};

function handleBtn(btnValid) {
  loginBtn.disabled = btnValid ? false : true;
  loginBtn.style.opacity = btnValid ? 1 : 0.5;
  loginBtn.style.cursor = btnValid ? "pointer" : "default";
}

function success(e) {
  e.preventDefault();
  alert("로그인이 완료 되었습니다!");
  location.href = "../Main/index.html";
}

inputs.addEventListener("input", handleInput);
loginBtn.addEventListener("click", success);
loginForm.addEventListener("submit", success);
