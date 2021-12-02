const quotes = [
  {
    text: "말을 독점하면 적이 많아진다",
    author: "유재석",
  },
  {
    text: "나만 힘든건 아니지만, 네가 더 힘든걸 안다고 내가 안 힘든건 아니다",
    author: "유병재",
  },
  {
    text: "생각이 적으면 인생에서 실수를 한다. 그러나 생각이 너무 많으면 인생을 망친다",
    author: "강호동",
  },
  {
    text: "인생을 짧고, 열심히 해라",
    author: "박명수",
  },
  {
    text: "인생에서 원하는 것을 얻기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    text: "나는 천천히 가는 사람입니다. 그러나 뒤로는 가지 않습니다.",
    author: "강호동",
  },
];

const quote = document.querySelector(".quote");
const index = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${index.text} - ${index.author}`;
