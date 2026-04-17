// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventParam = urlParams.get('event');
const dateParam = urlParams.get('date');

// Update event name if provided
if (eventParam) {
    document.getElementById("event-name").textContent = eventParam;
    document.title = eventParam + " Countdown";
}

// Define the date here (default if not provided in URL)
let countDownDate = new Date("June 9, 2025 18:00:00").getTime();
if (dateParam) {
    const parsedDate = new Date(dateParam).getTime();
    if (!isNaN(parsedDate)) {
        countDownDate = parsedDate;
    }
}

// Get all elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const daysLabel = document.getElementById("daysLabel");
const hoursLabel = document.getElementById("hoursLabel");
const minutesLabel = document.getElementById("minutesLabel");
const secondsLabel = document.getElementById("secondsLabel");

const x = setInterval(function() {
const now = new Date().getTime();
const distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Pad numbers with leading zeros if needed
daysElement.textContent = String(days).padStart(2, '0');
daysElement.textContent = convert(days);
hoursElement.textContent = String(hours).padStart(2, '0');
minutesElement.textContent = String(minutes).padStart(2, '0');
secondsElement.textContent = String(seconds).padStart(2, '0');

// Update labels with correct pluralization
daysLabel.textContent = days === 1 ? "day" : "days";
hoursLabel.textContent = hours === 1 ? "hour" : "hours";
minutesLabel.textContent = minutes === 1 ? "minute" : "minutes";
secondsLabel.textContent = seconds === 1 ? "second" : "seconds";

if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "<h2>Get out!</h2>";
}
}, 1000);

function convert(num) {
    if (num < 10) {
        return "0" + num;
    }
    else  {
        return num;
    }
}
