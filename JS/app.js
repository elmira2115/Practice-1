const countdownElement = document.querySelector(".countdown");
const items = document.querySelectorAll(".countdown-item > h4");

// start date
let countdownDate = new Date(2022, 11, 18, 10, 0, 0).getTime();

function getCountTime() {
  // current time
  const now = new Date().getTime();

  // find the time difference
  const distance = countdownDate - now;

  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  // create a variable in miesecond
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Counting for days, hours, minutes and second
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  // Create an array of variables
  const values = [days, hours, minutes, seconds];

  // Adding variable values to the page
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });

  // If time has elapsed
  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "<h4 class='expired'>Time's up!</h4>";
  }
}

// Updating the counter every second
let countdown = setInterval(getCountTime, 1000);

// Initialising the current time
getCountTime();