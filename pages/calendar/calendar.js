const today = new Date();

let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;
let currentDate = today.getDate();

// memo 모달 창 만들기

const calendarWrap = document.querySelector(".calendarWrap");

let calendarMemoArr = [];

const handleMemoModal = (y, m, d) => {
  const calendarMemoModal = document.createElement("div");
  calendarMemoModal.classList.add("calendarMemoModal");

  const presentDate = document.createElement("div");
  presentDate.classList.add("presentDate");

  const calendarMemo = document.createElement("textarea");
  calendarMemo.classList.add("calendarMemo");
  calendarMemo.setAttribute("placeholder", "메모를 작성하세요");

  const calendarMemoBtn = document.createElement("button");
  calendarMemoBtn.classList.add("calendarMemoBtn");
  calendarMemoBtn.innerText = "등록";

  const checkMemo = calendarMemoArr.filter(
    (el) => el.date === `${y}-${m}-${d}`
  );

  if (checkMemo.length !== 0) {
    checkMemo.forEach((el) => {
      let existDays = el.date.split("-");
      const [year, month, day] = existDays;
      presentDate.innerText = `${year}년 ${month}월 ${day}일`;
      calendarMemo.value = el.memo;
    });
  }

  presentDate.innerText = `${y}년 ${m}월 ${d}일`;

  calendarWrap.appendChild(calendarMemoModal);
  calendarMemoModal.appendChild(presentDate);
  calendarMemoModal.appendChild(calendarMemo);
  calendarMemoModal.appendChild(calendarMemoBtn);

  calendarMemoBtn.addEventListener("click", () =>
    saveMemo(y, m, d, calendarMemo, calendarMemoModal)
  );
};

const saveMemo = (y, m, d, memo, modal) => {
  const checkMemo = calendarMemoArr.filter(
    (el) => el.date === `${y}-${m}-${d}`
  );

  if (checkMemo.length !== 0) {
    calendarMemoArr = calendarMemoArr.map((el) => {
      if (el.date === `${y}-${m}-${d}`) {
        return { ...el, memo: memo.value };
      } else {
        return el;
      }
    });
  } else {
    let memoObj = {};
    memoObj.id = calendarMemoArr.length;
    memoObj.date = `${y}-${m}-${d}`;
    memoObj.memo = memo.value;
    calendarMemoArr.push(memoObj);
  }

  memoObj = {};
  memo.value = "";
  modal.remove();
  setCalendar(currentYear, currentMonth, calendarMemoArr);
};

// 달력 만들기

const dayList = document.querySelector(".dayList");

const createPrevMonth = (year, month, memo) => {
  let prevMonthEndDay = new Date(year, month - 1, 0);
  let prevMonthEndDate = prevMonthEndDay.getDate();
  let prevMonthEndDayOfWeek = prevMonthEndDay.getDay();

  if (prevMonthEndDayOfWeek === 6) return;

  for (
    let i = prevMonthEndDate - prevMonthEndDayOfWeek;
    i <= prevMonthEndDate;
    i++
  ) {
    const day = document.createElement("div");
    day.classList.add("day");

    if (
      memo.filter((el) => el.date === `${year}-${month - 1}-${i}`).length > 0
    ) {
      day.innerHTML = `${i} <span>📝</span>`;
    } else {
      day.innerText = i;
    }

    dayList.appendChild(day);

    day.addEventListener("click", () => handleMemoModal(year, month - 1, i));
  }
};

const createPresentMonth = (year, month, memo) => {
  let presentMonthEndDay = new Date(year, month, 0);
  let presentMonthEndDate = presentMonthEndDay.getDate();

  for (let i = 1; i <= presentMonthEndDate; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    if (memo.filter((el) => el.date === `${year}-${month}-${i}`).length > 0) {
      day.innerHTML = `${i} <span>📝</span>`;
    } else {
      day.innerText = i;
    }

    dayList.appendChild(day);

    day.addEventListener("click", () => handleMemoModal(year, month, i));
  }
};

const createNextMonth = (year, month, memo) => {
  let nextMonthFirstDay = new Date(year, month, 1);
  let nextMonthFirstDayOfWeek = nextMonthFirstDay.getDay();

  if (nextMonthFirstDayOfWeek === 0) return;

  let setDay = 1;
  for (let i = nextMonthFirstDayOfWeek; i <= 6; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    let nextYear;
    let nextMonth;

    if (month === 12) {
      nextMonth = 1;
      nextYear = year + 1;
    } else {
      nextYear = year;
      nextMonth = month + 1;
    }

    if (
      memo.filter((el) => el.date === `${nextYear}-${nextMonth}-${setDay}`)
        .length > 0
    ) {
      day.innerHTML = `${setDay} <span>📝</span>`;
    } else {
      day.innerText = setDay;
    }

    const targetDay = setDay;
    dayList.appendChild(day);

    day.addEventListener("click", () =>
      handleMemoModal(nextYear, nextMonth, targetDay)
    );

    setDay = setDay + 1;
  }
};

const setCalendar = (year, month, memo) => {
  dayList.innerHTML = "";
  createPrevMonth(year, month, memo);
  createPresentMonth(year, month, memo);
  createNextMonth(year, month, memo);
};

setCalendar(currentYear, currentMonth, calendarMemoArr);

// 월 변경하기

const changeMonthBox = document.querySelector(".changeMonthBox");
const prevMonthBtn = document.querySelector(".prevMonthBtn");
const currentYearMonth = document.querySelector(".currentYearMonth");
const nextMonthBtn = document.querySelector(".nextMonthBtn");

const handleMonth = (direction) => {
  if (direction === "prev") {
    if (currentMonth === 1) {
      currentYear = currentYear - 1;
      currentMonth = 12;
    } else {
      currentMonth = currentMonth - 1;
    }
  } else {
    if (currentMonth === 12) {
      currentYear = currentYear + 1;
      currentMonth = 1;
    } else {
      currentMonth = currentMonth + 1;
    }
  }

  currentYearMonth.innerText = `${currentYear}년 ${currentMonth}월`;

  setCalendar(currentYear, currentMonth, calendarMemoArr);
};

prevMonthBtn.addEventListener("click", () => {
  handleMonth("prev");
});
nextMonthBtn.addEventListener("click", () => {
  handleMonth("next");
});
