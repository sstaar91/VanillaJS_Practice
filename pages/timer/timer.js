const timerHour = document.querySelector(".timerHour");
const timerMinute = document.querySelector(".timerMinute");
const timerSecond = document.querySelector(".timerSecond");

const timerStartBtn = document.querySelector(".timerStartBtn");
const timerStopBtn = document.querySelector(".timerStopBtn");
const timerResetBtn = document.querySelector(".timerResetBtn");

let timer;

const startTimer = () => {
  timer = setInterval(() => {
    const currentSecond = Number(timerSecond.value);
    const currentMinute = Number(timerMinute.value);
    const currentHour = Number(timerHour.value);

    const totalSecond =
      currentHour * 3600 + currentMinute * 60 + currentSecond - 1;

    if (totalSecond === 0) clearInterval(timer);

    const hour = Math.floor(totalSecond / 3600);
    const minute = Math.floor((totalSecond - hour * 3600) / 60);
    const second = Math.floor(totalSecond - hour * 3600 - minute * 60);

    timerHour.value = String(hour).padStart(2, "0");
    timerMinute.value = String(minute).padStart(2, "0");
    timerSecond.value = String(second).padStart(2, "0");
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
};

const resetTimer = () => {
  clearInterval(timer);
  timerHour.value = "00";
  timerMinute.value = "00";
  timerSecond.value = "00";
};

timerStartBtn.addEventListener("click", startTimer);
timerStopBtn.addEventListener("click", stopTimer);
timerResetBtn.addEventListener("click", resetTimer);
