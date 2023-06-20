const employmentBox = document.querySelector(".employmentBox");

const getEmploymentList = async () => {
  const res = await fetch("/data/employmentList.json");
  const data = await res.json();
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
