const dailyBtn = document.querySelector(".daily-para")
const weeklyBtn = document.querySelector(".weekly-para");
const monthlyBtn = document.querySelector(".monthly-para");
const themeCardAll = document.querySelectorAll('.theme-card');
let paraCurrent = document.querySelectorAll("p.para-current");
let spanPrevious = document.querySelectorAll("#span-previous");

// request JSON data in async function //

async function requestData() {
    const response = await fetch('./data.json');
    const data = await response.json();

    // daily button listener //
    dailyBtn.addEventListener("click", event => {
        themeCardAll.forEach( element => { // iteration through all theme-cards //
            for (let i = 0; i < data.length; i++) {
                paraCurrent[i].textContent = data[i].timeframes.daily.current + (data[i].timeframes.daily.current > 1 ? "hrs" : "hr");
                spanPrevious[i].textContent = "Last Week - " + data[i].timeframes.daily.previous + (data[i].timeframes.daily.previous > 1 ? "hrs" : "hr");
            }
        });
    changeActive(dailyBtn, weeklyBtn, monthlyBtn);
    event.preventDefault();
    });
    // weekly button listener //
    weeklyBtn.addEventListener("click", event => {
        themeCardAll.forEach( element => {  // iteration through all theme-cards //
            for (let i = 0; i < data.length; i++) { // iteration through all objects in json data string (could be replaced with forEach() for simplicity - untested)//
                paraCurrent[i].textContent = data[i].timeframes.weekly.current + "hrs";
                spanPrevious[i].textContent = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
            }
        });
    changeActive(weeklyBtn, monthlyBtn, dailyBtn);    
    event.preventDefault();        
    });
    // monthly button listener //
    monthlyBtn.addEventListener("click", event => {
        themeCardAll.forEach ( element => { // iteration through all theme-cards //
            for (let i= 0; i < data.length; i++) {
                paraCurrent[i].textContent = data[i].timeframes.monthly.current + "hrs";
                spanPrevious[i].textContent = "Last Week - " + data[i].timeframes.monthly.previous + "hrs";    
            }
        })
    changeActive(monthlyBtn, weeklyBtn, dailyBtn);
    event.preventDefault();
    })
}

requestData(); // call function for JSON data parse //

// function that removes active class with white color text //

function changeActive(element, previousActive1, previousActive2) {
    previousActive1.classList.remove("active");    
    previousActive2.classList.remove("active");    
    element.classList.add("active");
}



// Workflow //

// eventlistener for timeframe (daily, weekly, monthly)
// populate each theme card with data.json file
//
// using forEach() to populate each theme-card with data isn't working. More research neeeded.
//
