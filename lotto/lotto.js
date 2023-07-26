const canvas = document.querySelector(".canvas");
const balls = document.getElementsByClassName("ball");
const defaultBall = document.getElementsByClassName("default");
const startBtn = document.querySelector(".startBtn");

const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

const startMove = () => {
  for (let i = 0; i < balls.length; i++) {
    balls[i].classList.add("active");
    defaultBall[i].classList.add("disappear");
  }
  setTimeout(removeActive, 4000);
};

const removeActive = () => {
  for (let i = 0; i < balls.length; i++) {
    balls[i].classList.remove("active");
    defaultBall[i].classList.remove("disappear");
  }

  setTimeout(openBox, 10);
};

const openBox = () => {
  leftBox.classList.add("slideLeft");
  rightBox.classList.add("slideRight");

  setTimeout(() => {
    leftBox.classList.remove("slideLeft");
    rightBox.classList.remove("slideRight");
  }, 1000);
};

const init = () => {
  startBtn.addEventListener("click", startMove);
};

init();
