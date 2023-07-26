const homeListContainer = document.querySelector(".homeListContainer");
let data;

const getHomeData = async () => {
  const response = await fetch("/data/homeListData.json");
  const result = await response.json();
  data = result.data;
  makeList(data);
};

const moveToPage = (page) => {
  location.href = `./pages/${page}/index.html`;
};

const makeList = (list) => {
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
};

getHomeData();
