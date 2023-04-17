"use strict";

const inputs = document.getElementsByClassName("loginForm")[0];
const loginBtn = document.querySelector(".loginBtn");

const handleInput = function () {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidId = checkValue(idValue);
  const isValidPw = checkValue(pwValue);

  isValidId && isValidPw ? handleBtn(true) : handleBtn(false);
};

const checkValue = function (value) {
  if (value.length > 5) {
    return true;
  } else {
    return false;
  }
};

function handleBtn(btnValid) {
  loginBtn.disabled = btnValid ? false : true;
  loginBtn.style.opacity = btnValid ? 1 : 0.5;
  loginBtn.style.cursor = btnValid ? "pointer" : "default";
}

function success(e) {
  e.preventDefault();
  alert("환영합니다!");
  location.replace("../main/main.html");
}

inputs.addEventListener("input", handleInput);
loginBtn.addEventListener("click", success);
loginBtn.addEventListener("submit", success);
