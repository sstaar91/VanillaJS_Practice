const carouselImgList = document.querySelector(".carouselImgList");

const imgList = [
  "./images/4.jpg",
  "./images/1.png",
  "./images/2.jpg",
  "./images/3.png",
  "./images/4.jpg",
  "./images/1.png",
];

const makeImg = () => {
  carouselImgList.style.width = `${imgList.length * 100}%`;
  imgList.forEach((url) => {
    const carouselImg = document.createElement("div");
    carouselImg.classList.add("carouselImg");
    carouselImg.style.backgroundImage = `url(${url})`;

    carouselImgList.appendChild(carouselImg);
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
  if (idx === imgList.length) {
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
      defaultWidth * (imgList.length - 1)
    }px)`;

    setTimeout(() => {
      carouselImgList.style.transform = `translateX(-${
        defaultWidth * (imgList.length - 2)
      }px)`;
      carouselImgList.style.transition = `all 0.3s ease-in-out`;
    }, 10);

    currentIdx = 4;
  }
};

autoSlide();
