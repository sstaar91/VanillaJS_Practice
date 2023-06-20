const listBox = document.querySelector(".listBox");

const getInternList = async () => {
  const res = await fetch("/data/internList.json");
  const data = await res.json();
  showInternList(data);
};

const showInternList = (data) => {
  data.forEach((list) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", list.img);
    cardImg.setAttribute("alt", "cardImage");

    const infoBox = document.createElement("div");
    infoBox.classList.add("cardInfoBox");

    const categoryWrap = document.createElement("div");
    categoryWrap.classList.add("cardCategoryWrap");

    const categoryLabel = document.createElement("label");
    if (list.deadline === "진행 중") {
      categoryLabel.classList.add("greyLabel");
    }
    categoryLabel.innerText = list.deadline;

    const categorySpan = document.createElement("span");
    categorySpan.innerText = list.category;

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("cardDescription");
    cardDescription.innerText = list.title;

    categoryWrap.appendChild(categoryLabel);
    categoryWrap.appendChild(categorySpan);

    infoBox.appendChild(categoryWrap);
    infoBox.appendChild(cardDescription);

    card.appendChild(cardImg);
    card.appendChild(infoBox);

    listBox.appendChild(card);
  });
};

const init = () => {
  getInternList();
};

init();
