const dailyBtn = document.querySelector("#daily-para")
const weeklyBtn = document.querySelector("#weekly-para");
const monthlyBtn = document.querySelector("#monthly-para");
const themeCardAll = document.querySelectorAll('.theme-card');
let paraCurrent = document.querySelector("div > p.para-current");
let spanPrevious = document.querySelector("#span-previous");
document.querySelector("body > main > article:nth-child(2)")

// // async function requestData() {
// //     const response = await fetch('./data.json');
// //     const data = await response.json();

//     dailyBtn.addEventListener("click", event => {
//     let workCard = document.querySelector("body > main > article:nth-child(2)");
//         for (let i = 0; i < data.length; i++) {
//         console.log(themeCardAll[i]);
//         }
    
//     event.preventDefault();
//     });


// // }

function doesitwork(){
    console.log('this is the daily paragraph');
    
}

dailyBtn.addEventListener("click", doesitwork, false);
weeklyBtn.addEventListener("click", doesitwork, false);
monthlyBtn.addEventListener("click", doesitwork, false);
    
 





// requestData();

// Workflow //

// eventlistener for timeframe (daily, weekly, monthly)
// populate each theme card with data.json file


//
// using forEach() to populate each theme-card isn't working. More research neeeded.
//
//