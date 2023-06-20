const mClassBox = document.querySelector(".mClassBox");

const getMClassList = async () => {
  const res = await fetch("/data/mClassList.json");
  const data = await res.json();
  showMClassList(data);
};

const showMClassList = (data) => {
  data.forEach((list) => {
    const mClassCard = document.createElement("div");
    mClassCard.classList.add("mClassCard");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", list.img);
    cardImage.setAttribute("alt", "mClassImage");

    const mClassPrice = document.createElement("div");
    mClassPrice.classList.add("mClassPrice");
    mClassPrice.innerText = "무료";

    const mClassInfoWrap = document.createElement("div");
    mClassInfoWrap.classList.add("mClassInfoWrap");

    const mClassCategory = document.createElement("span");
    mClassCategory.innerText = list.category;

    const mClassTitle = document.createElement("div");
    mClassTitle.innerText = list.title;

    const mClassLocation = document.createElement("span");
    mClassLocation.innerText = list.location;

    const mClassPeople = document.createElement("div");
    mClassPeople.classList.add("mClassPeople");
    mClassPeople.innerText = list.people + "명 모집";

    const mClassInfo = document.createElement("div");
    mClassInfo.classList.add("mClassInfo");

    const mClassRecruit = document.createElement("span");
    mClassRecruit.innerText = "기간 선발 모집중";

    const mClassDeadline = document.createElement("span");
    mClassDeadline.innerText = list.deadline;

    mClassBox.appendChild(mClassCard);
    mClassCard.appendChild(cardImage);
    mClassCard.appendChild(mClassPrice);
    mClassCard.appendChild(mClassInfoWrap);
    mClassInfoWrap.appendChild(mClassCategory);
    mClassInfoWrap.appendChild(mClassTitle);
    mClassInfoWrap.appendChild(mClassLocation);
    mClassInfoWrap.appendChild(mClassPeople);
    mClassInfoWrap.appendChild(mClassInfo);
    mClassInfo.appendChild(mClassRecruit);
    mClassInfo.appendChild(mClassDeadline);
  });
};

getMClassList();
