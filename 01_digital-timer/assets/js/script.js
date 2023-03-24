const timeEl = document.querySelector(".time");
const ampmEl = document.querySelector(".ampm");
const dateEl = document.querySelector(".date");

// adding "0" before hour / minute / second if less than 10
const timeFormat = (time) => {
    return time < 10 ? `0${time}` : time;
}

// getting current time and display in document
const getCurrentTime = () => {
    const date = new Date();
    // getting current hour / minutes / seconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";

    if(hours >= 12 ){
        hours = hours - 12;
        ampm = "PM";
    }

    // formating by adding 0 before which less than 10
    hours = timeFormat(hours);
    minutes = timeFormat(minutes);
    seconds = timeFormat(seconds);

    timeEl.innerHTML = `
            <h2 class="hour">${hours} :</h2>
            <h2 class="minutes"> ${minutes} :</h2>
            <h2 class="seconds">${seconds}</h2>
            <span class="ampm">PM</span>`;

}

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

// getting current date and display in document
const getCurrentDate = () => {
    const date = new Date();
    let day = date.getDate(); // today's date
    let weekDay = weekDays[date.getDay()]; // current weekday
    let month = months[date.getMonth()]; // cuurent month
    let year = date.getFullYear(); // current year


    dateEl.innerHTML = `<h3><span>${day}</span> <span>${month}</span> <span>${year}</span> | <span>${weekDay}</span></h3>`;
}

// calling function every second
setInterval(() => {
    getCurrentTime();
}, 1000)
// calling function on page load
document.addEventListener("DOMContentLoaded", () => {
    getCurrentTime();
    getCurrentDate();
});
