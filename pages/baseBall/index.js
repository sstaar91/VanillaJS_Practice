import { addDefaultPath } from "../../utils/addDefaultPath.js";

const logoBox = document.getElementsByClassName("logoBox")[0];
logoBox.addEventListener("click", (e) => {
  e.preventDefault();
  addDefaultPath(e.target.pathname);
});

const secretNumber = createSecretNumber();
let count = 0;
const answerList = [];

function createSecretNumber() {
  const uniqueDigits = new Set();
  while (uniqueDigits.size < 3) {
    const digit = Math.floor(Math.random() * 10);
    uniqueDigits.add(digit);
  }

  return Array.from(uniqueDigits).join("");
}

const answerNumbers = document.getElementsByClassName("baseBallNumberInput");
const baseBallSubmitBtn = document.querySelector(".baseBallSubmitBtn");

Array.from(answerNumbers).forEach((el) => {
  el.addEventListener("input", checkInputLength);
});

function checkInputLength(e) {
  const { value } = e.target;

  if (value.length > 1) {
    alert("숫자 하나만 입력해주세요");
    e.target.value = value.slice(0, 1);
  }
}

baseBallSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getAnswer();
});

function getAnswer() {
  let guessNumber = "";

  Array.from(answerNumbers).forEach((el) => {
    guessNumber += el.value;
  });

  if (guessNumber.length !== 3 || new Set(guessNumber).size !== 3) {
    alert("숫자 3자리를 모두 입력해주세요 (중복 없이)");
    return;
  } else {
    count++;

    const [strikes, balls] = getResult(secretNumber, guessNumber);

    answerList.push({
      id: count,
      guess: guessNumber,
      strike: strikes,
      ball: balls,
    });

    if (strikes === 3) {
      alert(`축하합니다! ${count}번만에 숫자를 맞추셨습니다.`);
      makeList(answerList);
    } else {
      alert(`스트라이크: ${strikes}, 볼: ${balls}`);
      makeList(answerList);
    }
  }
}

function getResult(secretNumber, guessNumber) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (secretNumber[i] === guessNumber[i]) {
      strikes++;
    } else if (secretNumber.includes(guessNumber[i])) {
      balls++;
    }
  }

  return [strikes, balls];
}

function makeList(answerList) {
  const baseBallAnswerListBox = document.querySelector(
    ".baseBallAnswerListBox"
  );

  baseBallAnswerListBox.innerHTML = "";

  answerList.forEach((el) => {
    const baseBallAnswerCard = document.createElement("div");
    const baseBallAnswerNumber = document.createElement("span");
    const baseBallResult = document.createElement("span");

    baseBallAnswerCard.classList.add("baseBallAnswerCard");
    baseBallAnswerNumber.classList.add("baseBallAnswerNumber");
    baseBallResult.classList.add("baseBallResult");

    baseBallAnswerNumber.innerText = el.guess;
    if (el.strike === 3) {
      baseBallResult.innerText = "정답입니다!";
    } else {
      baseBallResult.innerText = `${el.strike} strike ${el.ball} ball`;
    }

    baseBallAnswerListBox.appendChild(baseBallAnswerCard);
    baseBallAnswerCard.appendChild(baseBallAnswerNumber);
    baseBallAnswerCard.appendChild(baseBallResult);
  });

  Array.from(answerNumbers).forEach((el) => {
    el.value = "";
  });
}
