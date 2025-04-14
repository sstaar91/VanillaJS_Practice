import { addDefaultPath } from "./utils/addDefaultPath.js";
import { home_list_data } from "./data/home_list.js";

const main = document.getElementsByClassName("home")[0];

const logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", () => {
  window.location = "/";
});

const makeProjectList = (el) => {
  const mainArticle = document.createElement("article");
  const listImage = document.createElement("img");
  const listWrap = document.createElement("div");
  const mainTitleBox = document.createElement("div");
  const mainTitle = document.createElement("h2");
  const mainDate = document.createElement("p");
  const mainDesc = document.createElement("div");
  const moveBtn = document.createElement("button");
  const btnImg = document.createElement("img");

  mainArticle.classList.add("mainListBox");
  listImage.classList.add("mainListImage");
  listImage.setAttribute("src", el.mainImg);
  mainArticle.appendChild(listImage);

  mainTitleBox.classList.add("titleBox");
  mainTitle.classList.add("sectionTitle");
  mainTitle.innerText = el.title;
  mainDate.classList.add("dateText");
  mainDate.innerText = el.date;

  mainTitleBox.appendChild(mainTitle);
  mainTitleBox.appendChild(mainDate);

  mainDesc.classList.add("description");
  mainDesc.innerText = el.desc;

  moveBtn.classList.add("moveBtn");
  moveBtn.innerHTML = `<p>보러가기</p>`;
  btnImg.setAttribute("src", "icons/arrow_right.png");
  btnImg.setAttribute("height", "24px");
  moveBtn.appendChild(btnImg);

  listWrap.classList.add("listWrap");

  listWrap.appendChild(mainTitleBox);
  listWrap.appendChild(mainDesc);
  listWrap.appendChild(moveBtn);
  mainArticle.appendChild(listWrap);
  main.appendChild(mainArticle);
};

home_list_data.forEach((el) => makeProjectList(el));
