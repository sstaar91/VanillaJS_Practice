const clock = document.querySelector(".clock");

const getClock = () => {
  const date = new Date();
  const standard = date.getHours() >= 12 ? "PM" : "AM";
  const hour =
    date.getHours() >= 13 ? String(date.getHours() - 12).padStart(2, "0") : String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${standard} ${hour} : ${minute}`;
};

getClock();
setInterval(getClock, 1000);
