let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function countDown() {
  let date = new Date();
  days.innerHTML = date.getDay();
  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
  if (seconds.innerHTML < 10) {
    seconds.innerHTML = "0" + seconds.innerHTML;

  } else if (minutes.innerHTML < 10) {
    minutes.innerHTML = "0" + minutes.innerHTML;
  } else if (days.innerHTML < 10) {
    hours.innerHTML = "0" + hours.innerHTML;
  } else if (days.innerHTML < 10) {
    days.innerHTML = "0" + days.innerHTML;
  }
  else {

  }
}

setInterval(() => {
  countDown()
}, 1000);
