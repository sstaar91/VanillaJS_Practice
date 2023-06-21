const listBox = document.querySelector(".listBox");

const getInternList = async () => {
  const data = [
    {
      id: 1,
      category: "마케팅",
      deadline: "D-20",
      title:
        "동남아시아 시장에 마이크로니들 패치 판매를 위한 '활용 가능한' 온라인 마케팅 전략 제안",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35850/c01b2e9e-7d99-4ae4-8b20-33999cd81216/%EC%A0%9C%EB%8B%88%EB%9F%AD%EC%8A%A4%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
    },
    {
      id: 2,
      category: "영업",
      deadline: "D-6",
      title: "온라인 투자연계 금융업 사용자 (투자 및 대출) 활성화 방안",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35830/be758802-e5dc-471c-a36b-ec0103a5d6d7/%EB%82%98%EB%AA%A8%ED%8E%80%EB%94%A9%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
    },
    {
      id: 3,
      category: "기획·비즈니스",
      deadline: "D-20",
      title: "중장년의 재취업 교육에 필요한 프로그램 기획 및 개발",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35816/5a7d299e-bec6-4e1b-ac84-05938869937a/%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4-%EC%BB%A4%EB%B2%84-%EB%A7%8C%EB%93%A4%EA%B8%B0.png",
    },
    {
      id: 4,
      category: "디자인",
      deadline: "D-7",
      title: "엔닷캐드의 신규 서비스에 대한 UI/UX 개선점 제안",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35583/810d17c1-60a9-4f46-9d12-6b365fbb6ac6/%EC%97%94%EB%8B%B7%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4.png",
    },
    {
      id: 5,
      category: "기획·비즈니스",
      deadline: "D-5",
      title: "과학 및 공학 분야 VR 콘텐츠 기획",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35463/92596434-cbe7-4b45-bae1-45b73e65caa3/%EB%93%80%EC%BD%94%EC%A0%A0%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4-%EB%9E%9C%EB%94%A9%EC%BB%A4%EB%B2%84.jpg",
    },
    {
      id: 6,
      category: "마케팅",
      deadline: "D-5",
      title: "대학생들의 밈 현상을 유도할 수 있는 영상 리뷰 챌린지 이벤트 기획",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35462/25e36151-1419-4219-ac24-67e4bca3ec5a/%EC%95%8C%EB%B0%94%EC%9E%84%EB%B0%B0%EB%84%88-2.png",
    },
    {
      id: 7,
      category: "마케팅",
      deadline: "진행 중",
      title:
        "오롬이 추구하는 방향과 부합하는 인플루언서와의 신규 협업 마케팅 기획",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35403/2b6b96f0-8c67-4853-91d6-8755ab86196f/%EC%98%A4%EB%A1%AC%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4.png",
    },
    {
      id: 8,
      category: "회계·인사·총무",
      deadline: "진행 중",
      title: "구직자들의 입사 지원을 효과적으로 유도하기 위한 채용공고문 개선",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35168/2a6d49a0-161f-4ad6-920f-f364bdb0babb/%EC%BD%94%EC%8A%A4%EC%95%8C%EC%97%91%EC%8A%A4%EB%AF%B8%EB%8B%88%EC%9D%B8%ED%84%B4.jpg",
    },
  ];

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
