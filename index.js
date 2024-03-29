import { addDefaultPath } from "./utils/addDefaultPath.js";

const PROJECT_LIST = [
  {
    id: 4,
    img: "./images/baseBall.jpg",
    alt: "baseBall",
    path: "/pages/baseBall/index.html",
    desc: [
      { info: "T", title: "야구 게임" },
      { info: "D", title: "2023-07" },
    ],
  },
  {
    id: 3,
    img: "./images/westagram.jpg",
    alt: "westagram",
    path: "/pages/westagram/Login/index.html",
    desc: [
      { info: "T", title: "westagram" },
      { info: "D", title: "2022-07" },
    ],
  },
  {
    id: 2,
    img: "./images/weegle.jpg",
    alt: "weegle",
    path: "/pages/weegle/index.html",
    desc: [
      { info: "T", title: "Weegle" },
      { info: "D", title: "2022-07" },
    ],
  },
  {
    id: 1,
    img: "./images/colorCard.jpg",
    alt: "colorCard",
    path: "/pages/colorCard/index.html",
    desc: [
      { info: "T", title: "Color Card" },
      { info: "D", title: "2022-07" },
    ],
  },
];

const logoBox = document.getElementsByClassName("logoBox")[0];
logoBox.addEventListener("click", (e) => {
  e.preventDefault();
  addDefaultPath(e.target.pathname);
});

const homeListContainer = document.querySelector(".homeListContainer");

const makeList = () => {
  PROJECT_LIST.forEach((item) => {
    makeCardElement(item);
  });
};

function makeCardElement(item) {
  const card = document.createElement("div");
  const cardImgWrap = document.createElement("div");
  const cardImg = document.createElement("img");

  card.classList.add("cardWrap");
  cardImgWrap.classList.add("cardImgWrap");
  cardImg.classList.add("cardImg");

  cardImg.setAttribute("src", item.img);
  cardImg.setAttribute("alt", item.alt);

  cardImgWrap.appendChild(cardImg);
  card.appendChild(cardImgWrap);

  item.desc.forEach((text) => {
    const box = document.createElement("div");
    const title = document.createElement("label");
    const desc = document.createElement("span");

    box.classList.add("infoBox");
    title.classList.add("infoTitle");
    desc.classList.add("cardInfo");

    title.textContent = text.info;
    desc.textContent = text.title;

    box.appendChild(title);
    box.appendChild(desc);
    card.appendChild(box);
  });

  homeListContainer.appendChild(card);

  card.addEventListener("click", () => {
    goToPage(item.path);
  });
}

function goToPage(url) {
  addDefaultPath(url);
}

makeList();
