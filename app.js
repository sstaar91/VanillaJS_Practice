const homeList = [
  {
    id: 3,
    title: "야구 게임 만들기",
    img: "./images/baseBall.png",
    alt: "baseBall",
    description: [
      {
        id: 1,
        title: "overview",
        text: "해당 내용은 Javasciprt에 대한 학습을 진행하고 난 뒤, 스스로 개발한 자바스크립트 게임입니다. 해당 프로젝트를 통해 자바스크립트의 동작을 이해 할 수 있었습니다.\n👈🏻 자세한 구현 사항을 확인하고 싶다면 앞에 이미지를 클릭하세요.",
      },
      {
        id: 2,
        title: "주요 기능",
        text: "- 입력한 숫자 중복 방지\n- 입력한 값이 어떤 결과인지 확인할 수 있도록 표시\n- 정답인지 아닌지 알람으로 표시",
      },
    ],
  },
  {
    id: 2,
    title: "검색창 만들기",
    img: "./images/weegle.png",
    alt: "weegle",
    description: [
      {
        id: 1,
        title: "overview",
        text: "해당 내용은 Wecode에서 학습한 자료를 바탕으로 구현했습니다. 해당 과제를 통해 HTML 구조와 CSS 속성을 이용해 레이아웃을 구현하는 방법에 대해 이해했습니다.\n👈🏻 자세한 구현 사항을 확인하고 싶다면 앞에 이미지를 클릭하세요.",
      },
      {
        id: 2,
        title: "주요 기능",
        text: "- 검색창 UI 구현",
      },
    ],
  },
  {
    id: 1,
    title: "컬러카드 만들기",
    img: "./images/colorCard.png",
    alt: "colorCard",
    description: [
      {
        id: 1,
        title: "overview",
        text: "해당 내용은 Wecode에서 학습한 자료를 바탕으로 구현했습니다. 해당 과제를 통해 HTML 구조와 CSS 속성을 이용해 레이아웃을 구현하는 방법에 대해 이해했습니다.\n👈🏻 자세한 구현 사항을 확인하고 싶다면 앞에 이미지를 클릭하세요.",
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
