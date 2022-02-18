const dailyBtn = document.querySelector(".daily-para");
const weeklyBtn = document.querySelector(".weekly-para");
const monthlyBtn = document.querySelector(".monthly-para");
const themeCardAll = document.querySelectorAll(".theme-card");
const cardWork = document.querySelector(".card-1");
const cardPlay = document.querySelector(".card-2");
const cardStudy = document.querySelector(".card-3");
const cardExercise = document.querySelector(".card-4");
const cardSocial = document.querySelector(".card-5");
const cardSelfCare = document.querySelector(".card-6");
const ellipsisIconWork = document.querySelector(".card-work");
const ellipsisIconPlay = document.querySelector(".card-play");
const ellipsisIconStudy = document.querySelector(".card-study");
const ellipsisIconExercise = document.querySelector(".card-exercise");
const ellipsisIconSocial = document.querySelector(".card-social");
const ellipsisIconSelfCare = document.querySelector(".card-self-care");
const dataCard = document.querySelectorAll(".data-card");
const timeSelection = document.querySelector(".time-selection");
// const extraCard = document.querySelector(".theme-card-info");
let paraCurrent = document.querySelectorAll("p.para-current");
let spanPrevious = document.querySelectorAll(".span-previous");

// request JSON data in async function //

async function requestData() {
  const response = await fetch("./data.json");
  const data = await response.json();

  // daily button listener //
  dailyBtn.addEventListener("click", (event) => {
    themeCardAll.forEach((element) => {
      // iteration through all theme-cards //
      for (let i = 0; i < data.length; i++) {
        paraCurrent[i].textContent =
          data[i].timeframes.daily.current +
          (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
        spanPrevious[i].textContent =
          "Yesterday - " +
          data[i].timeframes.daily.previous +
          (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
      }
    });
    changeActive(dailyBtn, weeklyBtn, monthlyBtn);
    event.preventDefault();
  });
  // weekly button listener //
  weeklyBtn.addEventListener("click", (event) => {
    themeCardAll.forEach((element) => {
      // iteration through all theme-cards //
      for (let i = 0; i < data.length; i++) {
        // iteration through all objects in json data string (could be replaced with forEach() for simplicity - untested)//
        paraCurrent[i].textContent = data[i].timeframes.weekly.current + "hrs";
        spanPrevious[i].textContent =
          "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
      }
    });
    changeActive(weeklyBtn, monthlyBtn, dailyBtn);
    event.preventDefault();
  });
  // monthly button listener //
  monthlyBtn.addEventListener("click", (event) => {
    themeCardAll.forEach((element) => {
      // iteration through all theme-cards //
      for (let i = 0; i < data.length; i++) {
        paraCurrent[i].textContent = data[i].timeframes.monthly.current + "hrs";
        spanPrevious[i].textContent =
          "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
      }
    });
    changeActive(monthlyBtn, weeklyBtn, dailyBtn);
    event.preventDefault();
  });
}

requestData(); // call function for JSON data parse //

// function that removes active class with white color text //

function changeActive(element, previousActive1, previousActive2) {
  previousActive1.classList.remove("active");
  previousActive2.classList.remove("active");
  element.class;
  List.add("active");
}

// ellipsis img click eventlistener //

function extraInfo() {
  let closed = true;
  ellipsisIconWork.addEventListener("click", () => {
    // conditional for opening
    if (closed) {
      cardWork.classList.remove("hidden");
      dataCard[0].classList.remove("border-radius");
      dataCard[0].classList.add("border-top-radius");
      closed = false;
      // or closing the extra tab
    } else {
      cardWork.classList.add("hidden");
      dataCard[0].classList.add("border-radius");
      dataCard[0].classList.remove("border-top-radius");
      timeSelection.classList.remove(".height");
      closed = true;
    }
  });
  ellipsisIconPlay.addEventListener("click", () => {
    // conditional for opening
    if (closed) {
      cardPlay.classList.remove("hidden");
      dataCard[1].classList.remove("border-radius");
      dataCard[1].classList.add("border-top-radius");
      closed = false;
      // or closing the extra tab
    } else {
      cardPlay.classList.add("hidden");
      dataCard[1].classList.add("border-radius");
      dataCard[1].classList.remove("border-top-radius");
      closed = true;
    }
  });
  ellipsisIconStudy.addEventListener("click", () => {
    // conditional for opening
    if (closed) {
      cardStudy.classList.remove("hidden");
      dataCard[2].classList.remove("border-radius");
      dataCard[2].classList.add("border-top-radius");
      closed = false;
      // or closing the extra tab
    } else {
      cardStudy.classList.add("hidden");
      dataCard[2].classList.add("border-radius");
      dataCard[2].classList.remove("border-top-radius");
      closed = true;
    }
  });
  ellipsisIconExercise.addEventListener("click", () => {
    // conditional for opening
    if (closed) {
      cardExercise.classList.remove("hidden");
      dataCard[3].classList.remove("border-radius");
      dataCard[3].classList.add("border-top-radius");
      closed = false;
      // or closing the extra tab
    } else {
      cardExercise.classList.add("hidden");
      dataCard[3].classList.add("border-radius");
      dataCard[3].classList.remove("border-top-radius");
      closed = true;
    }
  });
  ellipsisIconSocial.addEventListener("click", () => {
    // conditional for opening
    if (closed) {
      cardSocial.classList.remove("hidden");
      dataCard[4].classList.remove("border-radius");
      dataCard[4].classList.add("border-top-radius");
      closed = false;
      // or closing the extra tab
    } else {
      cardSocial.classList.add("hidden");
      dataCard[4].classList.add("border-radius");
      dataCard[4].classList.remove("border-top-radius");
      closed = true;
    }
  });
  ellipsisIconSelfCare.addEventListener("click", () => {
    // conditional for opening
    if (closed) {
      cardSelfCare.classList.remove("hidden");
      dataCard[5].classList.remove("border-radius");
      dataCard[5].classList.add("border-top-radius");
      closed = false;
      // or closing the extra tab
    } else {
      cardSelfCare.classList.add("hidden");
      dataCard[5].classList.add("border-radius");
      dataCard[5].classList.remove("border-top-radius");
      closed = true;
    }
  });
}

extraInfo();

// Workflow //

// eventlistener for timeframe (daily, weekly, monthly)
// populate each theme card with data.json file
//
// using forEach() to populate each theme-card with data isn't working. More research neeeded.
//
