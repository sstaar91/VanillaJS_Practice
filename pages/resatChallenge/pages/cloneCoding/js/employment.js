const employmentBox = document.querySelector(".employmentBox");

const getEmploymentList = async () => {
  const data = [
    {
      id: 1,
      category: "기획·비즈니스",
      title: "기술혁신사업부 서비스 기획자",
      company: "(주)오픈놀",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직", "취업성과금 110만원"],
    },
    {
      id: 2,
      category: "개발",
      title: "Frontend Engineer (Web)",
      company: "루덴시티(주)",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
    {
      id: 3,
      category: "개발",
      title: "Data Scientist",
      company: "(주)지지큐컴퍼니",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
    {
      id: 4,
      category: "기획·비즈니스",
      title: "[CG팀] 운영 매니저",
      company: "(주)인티그레이션",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
    {
      id: 5,
      category: "영업",
      title: "업라이즈 MFO VIP 영업관리 매니저",
      company: "업라이즈",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
    {
      id: 6,
      category: "마케팅",
      title: "퍼포먼스 마케터 (Performance Marketer)",
      company: "(주)라포랩스",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
    {
      id: 7,
      category: "영업",
      title: "기업(B2B) 영업 관리 주니어(사원, 대리 급)",
      company: "설로인(주)",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
    {
      id: 8,
      category: "영업",
      title: "국내영업 온라인 팀원",
      company: "(주)미미박스",
      img: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/20007/97d810cc-b44b-4049-87f6-4c6be9201ead/%EC%A3%BC%EC%98%A4%ED%94%88%EB%86%80%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80-47.png",
      label: ["정규직"],
    },
  ];
  showEmploymentList(data);
};

const showEmploymentList = (data) => {
  data.forEach((list) => {
    const employmentCard = document.createElement("div");
    employmentCard.classList.add("employmentCard");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", list.img);
    cardImg.setAttribute("alt", "employmentLogo");

    const employmentInfoWrap = document.createElement("div");
    employmentInfoWrap.classList.add("employmentInfoWrap");

    const category = document.createElement("span");
    category.innerText = list.category;

    const employmentTitle = document.createElement("div");
    employmentTitle.classList.add("employmentText");
    employmentTitle.innerText = list.title;

    const employmentCompany = document.createElement("div");
    employmentCompany.classList.add("employmentText");
    employmentCompany.innerText = list.company;

    employmentBox.appendChild(employmentCard);
    employmentCard.appendChild(cardImg);
    employmentCard.appendChild(employmentInfoWrap);
    employmentInfoWrap.appendChild(category);
    employmentInfoWrap.appendChild(employmentTitle);
    employmentInfoWrap.appendChild(employmentCompany);

    list.label.forEach((el) => {
      const employmentLabel = document.createElement("label");
      employmentLabel.innerText = el;
      if (el !== "정규직") {
        employmentLabel.classList.add("greyLabel");
      }
      employmentInfoWrap.appendChild(employmentLabel);
    });
  });
};

getEmploymentList();
