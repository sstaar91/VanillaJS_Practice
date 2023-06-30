const correctId = "sstaar";
const correctPw = "1234@1234";

const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const loginBtn = document.querySelector(".loginBtn");
const main = document.querySelector(".mainContainer");

const checkUserInfo = () => {
  if (correctId !== id.value) return showToast("아이디가 올바르지 않습니다");
  if (correctPw !== pw.value) return showToast("비밀번호가 올바르지 않습니다.");
  showToast("로그인 성공!");
};

loginBtn.addEventListener("click", checkUserInfo);

const showToast = (text) => {
  const toastBox = document.createElement("div");
  toastBox.classList.add("toastBox");
  toastBox.innerText = text;
  main.appendChild(toastBox);
  setTimeout(() => {
    toastBox.style.animation = "fade-out 0.5s ease-in-out";
  }, 2000);
  setTimeout(() => {
    toastBox.style.display = "none";
  }, 2510);
};
