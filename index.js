const secondHand = document.querySelector(".clock__secs");
const minHand = document.querySelector(".clock__mins");
const hourHand = document.querySelector(".clock__hour");
const toggle = document.querySelector(".toggle");
const time = document.querySelector(".time");
const date = document.querySelector(".date");

const days = [
    "Sundar",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Oct",
    "Sep",
    "Nov",
    "Dec",
]

toggle.addEventListener("click", () =>{
    const section = document.querySelector("section");
    if (section.classList.contains("dark")) {
        section.classList.remove("dark");
    } else {
        section.classList.add("dark");
    }
})

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsToDegress = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsToDegress}deg)`;
    
    const minutes = now.getMinutes();
    const minutesToDegress = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesToDegress}deg)`;

    const hours = now.getHours();
    const hoursToDegress = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursToDegress}deg)`;
}

setInterval(setDate, 1000);

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const day = now.getDay();
const month = now.getMonth();
const dayNumber = now.getDate();
console.log(dayNumber);

time.innerHTML = `${hours}:${minutes < 10?`0${minutes}`:minutes}`;
date.innerHTML = `${days[day]},${months[month]} ${dayNumber}`;