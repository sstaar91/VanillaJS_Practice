const PROJECT_LIST = [
  {
    id: 4,
    img: "./images/baseBall.png",
    alt: "baseBall",
    path: "/pages/baseBall/index.html",
    desc: [
      { info: "T", title: "야구 게임" },
      { info: "D", title: "2023-07" },
    ],
  },
  {
    id: 3,
    img: "./images/baseBall.png",
    alt: "westagram",
    path: "/pages/westagram/Login/index.html",
    desc: [
      { info: "T", title: "westagram" },
      { info: "D", title: "2023-07" },
    ],
  },
  {
    id: 2,
    img: "./images/weegle.png",
    alt: "weegle",
    path: "/pages/weegle/index.html",
    desc: [
      { info: "T", title: "Weegle" },
      { info: "D", title: "2022-07" },
    ],
  },
  {
    id: 1,
    img: "./images/colorCard.png",
    alt: "colorCard",
    path: "/pages/colorCard/index.html",
    desc: [
      { info: "T", title: "Color Card" },
      { info: "D", title: "2022-07" },
    ],
  },
];

const homeListContainer = document.querySelector(".homeListContainer");

const makeList = () => {
  PROJECT_LIST.forEach((item) => {
    makeCardElement(item);
  });
};

function makeCardElement(item) {
  const card = document.createElement("div");
  const cardImg = document.createElement("img");

  card.classList.add("cardWrap");
  cardImg.classList.add("cardImg");

  cardImg.setAttribute("src", item.img);
  cardImg.setAttribute("alt", item.alt);

  card.appendChild(cardImg);

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

function goToPage(path) {
  location.href = path;
}

makeList();
