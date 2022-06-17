
var daysBtn = document.getElementById("daysBtn");
var days = document.getElementById("days");
var hoursBtn = document.getElementById("hoursBtn");
var hours = document.getElementById("hours");
var minutesBtn = document.getElementById("minutesBtn");
var minutes = document.getElementById("minutes");
var secondsBtn = document.getElementById("secondsBtn");
var seconds = document.getElementById("seconds");

function daysFunc() {
    var time = Number(days.value);
    hours.value = time * 24.0;
    minutes.value = hours.value * 60.0;
    seconds.value = minutes.value * 60.0;
}

function hoursFunc() {
    var time = Number(hours.value);
    days.value = time / 24.0;
    minutes.value = time * 60.0;
    seconds.value = minutes.value * 60.0;
}

function minutesFunc() {
    var time = Number(minutes.value);
    hours.value = time / 60.0;
    days.value = hours.value / 24.0;
    seconds.value = time * 60.0;
}

function secondsFunc() {
    var time = Number(seconds.value);
    minutes.value = time / 60.0;
    hours.value = minutes.value / 60.0;
    days.value = hours.value / 24.0;
}

function attachEventsListeners(){
    daysBtn.addEventListener("click", daysFunc);
    hoursBtn.addEventListener("click", hoursFunc);
    minutesBtn.addEventListener("click", minutesFunc);
    secondsBtn.addEventListener("click", secondsFunc);
}