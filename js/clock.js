let d = new Date();
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

if (d.getHours() < 12) {
  document.getElementById("greeting").innerHTML =
    "Good Morning Based on your relative position on the third planet from your solar systems central star!!";
} else if (d.getHours() > 12 && d.getHours() < 17) {
  document.getElementById("greeting").innerHTML =
    "Good Afternoon Based on your relative position on the third planet from your solar systems central star!!";
} else {
  document.getElementById("greeting").innerHTML =
    "Good Evening Based on your relative position on the third planet from your solar systems central star!!";
}

const currentMonth = months[d.getMonth()];
const currentDay = days[d.getDay()];
const dayOfMonth = d.getDate();
const currentYear = d.getFullYear();
let currentHour = d.getHours();
let currentMins = d.getMinutes();
let currentSecs = d.getSeconds();
document.getElementById("todaysDate").innerHTML =
  currentDay + " " + currentMonth + " " + dayOfMonth + " " + currentYear;
//console.log(currentMonth, currentDay, dayOfMonth, currentYear);
const mornEve = amPm(currentHour);

function amPm(currentHour) {
  if (currentHour < 12) {
    return "AM";
  } else {
    return "PM";
  }
}

if (currentHour < 10) {
  currentHour = "0" + d.getHours();
} else if (currentHour > 12) {
  currentHour = d.getHours() - 12;
}

if (currentMins < 10) {
  currentMins = "0" + d.getMinutes();
}

if (currentSecs < 10) {
  currentSecs = "0" + d.getSeconds();
}
function currentTime() {
  let time = (document.getElementById("todaysTime").innerHTML =
    currentHour + ":" + currentMins + ":" + currentSecs + " " + mornEve);
  console.log(time);
}
//setInterval(currentTime, 1000);
