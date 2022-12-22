const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
const giveaway = document.querySelector('.giveaway');

// current time values
let cYear = new Date().getFullYear();
let cMonth = new Date().getMonth();
let cDate = new Date().getDate();

// time of 10 days later 
const futureDate = new Date(cYear, cMonth, cDate + 10, 11, 00, 00);


const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];
let month = futureDate.getMonth();
month = months[month];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`;



function getRemainingTime()
{
  const futureTime = futureDate.getTime();
  const currentTime = new Date().getTime();

  const remainingTime = futureTime - currentTime;

  const oneDay = 24 * 60 * 60 * 1000;
  let days = Math.floor(remainingTime / oneDay);

  const oneHour = 60 * 60 * 1000;
  let hours = Math.floor((remainingTime % oneDay) / oneHour);

  const oneMin = 60 * 1000;
  let mins = Math.floor((remainingTime % oneHour) / oneMin);

  let secs = Math.floor((remainingTime % oneMin) / 1000);

  const values = [days, hours, mins, secs];

  let i = 0;
  items.forEach(item => {

    if(values[i] < 10)
    {
      item.innerHTML = `0${values[i]}`
    }
    else{
      item.innerHTML = `${values[i]}`
    }
    
    i++;

    if(remainingTime < 0)
    {
      clearInterval(countdown)
      deadline.innerHTML = `<h4 class="expired" style="color: red">Sorry, the giveaway has ended!</h4>`;
    }
  })
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();
