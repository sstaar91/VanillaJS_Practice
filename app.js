const homeList = [
  {
    id: 1,
    title: "컬러카드 만들기",
    img: "./images/colorCard.png",
    alt: "colorCard",
    description: [
      {
        id: 1,
        title: "overview",
        text: "해당 내용은 Wecode에서 학습한 자료를 바탕으로 구현했습니다. 자세한 구현 사항을 확인하고 싶다면 앞에 이미지를 클릭하세요.",
      },
      {
        id: 2,
        title: "주요 기능",
        text: "- 컬러 박스에 마우스 hover시 해당 색의 hex 값 노출",
      },
    ],
  },
];

const homeListContainer = document.querySelector(".homeListContainer");

function makeList(list) {
  list.forEach(({ img, alt, title, description }) => {
    const homeListCardBox = document.createElement("div");
    const homeListTitle = document.createElement("h2");
    const homeListImg = document.createElement("img");
    const homeListInfoBox = document.createElement("div");

    homeListCardBox.classList.add("homeListCardBox");
    homeListTitle.classList.add("homeListTitle");
    homeListImg.classList.add("homeListImg");
    homeListInfoBox.classList.add("homeListInfoBox");

    homeListTitle.innerText = title;
    homeListImg.setAttribute("src", img);
    homeListImg.setAttribute("alt", alt);

    homeListContainer.appendChild(homeListCardBox);
    homeListCardBox.appendChild(homeListTitle);
    homeListCardBox.appendChild(homeListImg);
    homeListCardBox.appendChild(homeListInfoBox);

    homeListImg.addEventListener("click", () => moveToPage(alt));

    description.forEach(({ title, text }) => {
      const homeListText = document.createElement("h3");
      const homeListOverview = document.createElement("p");

      homeListText.classList.add("homeListText");
      homeListOverview.classList.add("homeListOverview");

      homeListText.innerText = title;
      homeListOverview.innerText = text;

      homeListInfoBox.appendChild(homeListText);
      homeListInfoBox.appendChild(homeListOverview);
    });
  });
}

function moveToPage(page) {
  location.href = `./pages/${page}/index.html`;
}

makeList(homeList);
