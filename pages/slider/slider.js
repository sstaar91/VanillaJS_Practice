const carouselImgList = document.querySelector(".carouselImgList");

const imgList = [
  "./images/1.png",
  "./images/2.jpg",
  "./images/3.png",
  "./images/4.jpg",
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
let currentIdx = 0;

const handleCarouselBtn = (direction) => {
  const transform = carouselImgList.style.transform;
  const currentWight = transform.slice(
    transform.indexOf("(") + 1,
    transform.indexOf("px")
  );

  if (direction === "right") {
    if (currentWight === `${(imgList.length - 1) * -500}`) return;
    carouselImgList.style.transform = `translateX(-${
      (currentIdx + 1) * 500
    }px)`;
    currentIdx++;
  } else {
    if (currentWight === "0") return;
    carouselImgList.style.transform = `translateX(-${
      (currentIdx - 1) * 500
    }px)`;
    currentIdx--;
  }
};

leftBtn.addEventListener("click", () => handleCarouselBtn("left"));

rightBtn.addEventListener("click", () => {
  handleCarouselBtn("right");
});
