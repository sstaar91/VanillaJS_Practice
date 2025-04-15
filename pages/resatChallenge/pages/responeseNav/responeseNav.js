// 반응형
const navBox = document.querySelector(".navBox");

const responsiveNavBox = () => {
  if (document.body.offsetWidth <= 600) {
    if (navIcon.style.display === "none" && navBox.style.display !== "grid") {
      navBox.style.display = "flex";
      navIcon.style.display = "none";
    } else {
      navBox.style.display = "none";
      navIcon.style.display = "inline";
    }
  } else {
    navBox.style.display = "grid";
    navIcon.style.display = "none";
  }
};

window.addEventListener("resize", responsiveNavBox);

const navIcon = document.querySelector(".navIcon");
const navCancelIcon = document.querySelector(".navCancelIcon");

navIcon.addEventListener("click", () => {
  navBox.style.display = "flex";
  navIcon.style.display = "none";
});

navCancelIcon.addEventListener("click", () => {
  navBox.style.display = "none";
  navIcon.style.display = "inline";
});
