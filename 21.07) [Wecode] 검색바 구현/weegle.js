"use strict";

const colorBtn = document.querySelector(".colorPick");
const westaBtn = document.querySelector(".westa");

const goToColorPick = () => {
  location.href = "http://127.0.0.1:5501/pages/Assignment/colorCard.html";
};

const goToWestagram = () => {
  location.replace("http://127.0.0.1:5501/pages/Westa/Login/login.html");
};

colorBtn.addEventListener("click", goToColorPick);
westaBtn.addEventListener("click", goToWestagram);
