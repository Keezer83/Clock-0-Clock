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

const currentMonth = months[d.getMonth()];
const currentDay = days[d.getDay()];
const dayOfMonth = d.getDate();
const currentYear = d.getFullYear();
document.getElementById("todaysDate").innerHTML =
  currentDay + " " + currentMonth + " " + dayOfMonth + " " + currentYear;
console.log(currentMonth, currentDay, dayOfMonth, currentYear);
