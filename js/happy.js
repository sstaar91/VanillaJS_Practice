const happyBox = document.querySelector(".happyBox");

const getHappyList = async () => {
  const res = await fetch("/data/happyList.json");
  const data = await res.json();
  showHappyList(data);
};

const showHappyList = (data) => {
  data.forEach((list) => {
    const happyCard = document.createElement("div");
    happyCard.classList.add("happyCard");

    const happyImage = document.createElement("img");
    happyImage.setAttribute("src", list.img);
    happyImage.setAttribute("alt", "happyImage");

    const happyInfoWrap = document.createElement("div");
    happyInfoWrap.classList.add("happyInfoWrap");

    happyBox.appendChild(happyCard);
    happyCard.appendChild(happyImage);
    happyCard.appendChild(happyInfoWrap);

    list.label.forEach((el) => {
      const happyInfoLabel = document.createElement("label");
      happyInfoLabel.innerText = el;
      happyInfoWrap.appendChild(happyInfoLabel);
    });

    const happyInfoTitle = document.createElement("div");
    happyInfoTitle.innerText = list.title;
    happyInfoWrap.appendChild(happyInfoTitle);

    const userWrap = document.createElement("div");
    userWrap.classList.add("userWrap");
    happyInfoWrap.appendChild(userWrap);

    const userImage = document.createElement("div");
    userImage.classList.add("userImage");
    userWrap.appendChild(userImage);

    const userName = document.createElement("span");
    userName.innerText = list.user;
    userWrap.appendChild(userName);

    const happyPrice = document.createElement("div");
    happyPrice.classList.add("happyPrice");
    happyPrice.innerText = list.price.toLocaleString() + "원";
    happyInfoWrap.appendChild(happyPrice);
  });
};

getHappyList();
