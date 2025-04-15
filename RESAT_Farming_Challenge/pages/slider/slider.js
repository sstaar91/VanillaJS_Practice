const carouselImgList = document.querySelector(".carouselImgList");

let textList = [
  {
    id: 1,
    color: "black",
    label: "IT",
    text: `밑바닥에서 시작해서<br />가장 높은 곳까지 <br />올라가 보고
  싶다면?`,
  },
  {
    id: 2,
    color: "green",
    label: "취업",
    text: `대기업을 목표로 하고 있다면<br />지금 당장 알아봐야 할 <br /> 10가지!`,
  },
  {
    id: 3,
    color: "pink",
    label: "자기계발",
    text: `지금 나에게<br />가장 필요한<br />능력치가 뭘까?`,
  },
  {
    id: 4,
    color: "blue",
    label: "마케팅",
    text: `고객들이<br />원하는 것을<br />스스로 말하게 하는 방법?`,
  },
];

const setImgList = () => {
  textList.push(textList[0]);
  textList.unshift(textList.at(-2));
};

setImgList();

const makeImg = () => {
  carouselImgList.style.width = `${textList.length * 100}%`;
  textList.forEach((el) => {
    const carouselImg = document.createElement("div");
    const carouselLabel = document.createElement("span");
    const carouselDescription = document.createElement("p");

    carouselImg.classList.add("carouselImg");
    carouselLabel.classList.add("carouselLabel");
    carouselDescription.classList.add("carouselDescription");

    carouselImg.style.backgroundColor = el.color;
    carouselLabel.innerText = el.label;
    carouselDescription.innerHTML = el.text;

    carouselImgList.appendChild(carouselImg);
    carouselImg.appendChild(carouselLabel);
    carouselImg.appendChild(carouselDescription);
  });
};

makeImg();

// 이미지 슬라이드 기능

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let currentIdx = 1;
const defaultWidth = 500;

const handleCarouselBtn = (value) => {
  clearInterval(auto);

  carouselImgList.style.transform = `translateX(-${
    (currentIdx + value) * defaultWidth
  }px)`;
  currentIdx = currentIdx + value;

  value === 1 ? autoRightSlide(currentIdx + value) : autoLeftSlide(currentIdx);

  autoSlide();
};

leftBtn.addEventListener("click", () => handleCarouselBtn(-1));

rightBtn.addEventListener("click", () => {
  handleCarouselBtn(1);
});

// 자동 슬라이드

const autoSlide = () => {
  auto = setInterval(() => {
    handleCarouselBtn(1);
  }, 2000);
};

const autoRightSlide = (idx) => {
  if (idx === textList.length) {
    carouselImgList.style.transition = "none";
    carouselImgList.style.transform = `translateX(0px)`;

    setTimeout(() => {
      carouselImgList.style.transform = `translateX(-${defaultWidth}px)`;
      carouselImgList.style.transition = `all 0.3s ease-in-out`;
    }, 10);

    currentIdx = 1;
  }
};

const autoLeftSlide = (idx) => {
  if (idx === 0) {
    carouselImgList.style.transition = "none";
    carouselImgList.style.transform = `translateX(-${
      defaultWidth * (textList.length - 1)
    }px)`;

    setTimeout(() => {
      carouselImgList.style.transform = `translateX(-${
        defaultWidth * (textList.length - 2)
      }px)`;
      carouselImgList.style.transition = `all 0.3s ease-in-out`;
    }, 10);

    currentIdx = 4;
  }
};

autoSlide();
