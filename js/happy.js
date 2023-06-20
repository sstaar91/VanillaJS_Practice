const happyBox = document.querySelector(".happyBox");

const getHappyList = async () => {
  const data = [
    {
      id: 1,
      label: ["취업스토리"],
      title: "30대 비전공자의 개발자 커리어 전환기",
      user: "뚜루리",
      price: 5000,
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
    },
    {
      id: 2,
      label: ["역량개발", "직장생활"],
      title: "알잘딱깔센! 취업준비! 신입사원 노하우! 공유",
      user: "열쩡!열쩡!열쩡",
      price: 8000,
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35405/2480abbf-dfaf-4105-bdb9-4a9b62f2a051/%EC%95%8C%EC%9E%98%EB%94%B1%EA%B9%94%EC%84%BC-%EC%B7%A8%EC%97%85%EC%A4%80%EB%B9%84-%EC%8B%A0%EC%9E%85%EC%82%AC%EC%9B%90-%EB%85%B8%ED%95%98%EC%9A%B0-%EA%B3%B5%EC%9C%A0-cover.jpg",
    },
    {
      id: 3,
      label: ["이력서/자소서", "면접"],
      title: "3년차 제약회사 연구원이 알려주는 자소서&면접 노하우",
      user: "둥가둥",
      price: 15000,
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35108/4e4efa39-896d-4fa6-9dee-d5f243fe7b96/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
    },
    {
      id: 4,
      label: ["취업스토리"],
      title: "지방대 문과생이 IT 취업에 이직까지 성공했다고?",
      user: "노을",
      price: 12000,
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35132/fcb703d1-6104-4175-be4c-8982bed44e71/%EC%A7%80%EB%B0%A9%EB%8C%80-%EB%AC%B8%EA%B3%BC%EC%83%9D%EC%9D%B4-IT-%EC%B7%A8%EC%97%85%EC%97%90-%EC%9D%B4%EC%A7%81%EA%B9%8C%EC%A7%80-%EC%84%B1%EA%B3%B5%ED%96%88%EB%8B%A4%EA%B3%A0-cover.jpg",
    },
  ];
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
