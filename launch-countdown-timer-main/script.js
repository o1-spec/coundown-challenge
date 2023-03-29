'use strict'
let getDay = document.querySelector('.day')
let getHour = document.querySelector('.hour')
let getMinuite = document.querySelector('.minuite')
let getSeconds = document.querySelector('.seconds')
let seconds = +getSeconds.innerHTML
let day = +getDay.innerHTML;
let hour = +getHour.innerHTML
let minuite = +getMinuite.innerHTML;
let interval;

console.log(day)
console.log(hour)
console.log(minuite)
console.log(seconds)

interval = setInterval(timer,1000)
function timer(){
    seconds--
    if(seconds > 0){
        getSeconds.innerHTML = seconds;
    }

    if(seconds < 10){
        getSeconds.innerHTML = '0' + seconds
    }

    if(seconds < 0){
        seconds = 60;
        getSeconds.innerHTML = seconds;
        minuite--
        getMinuite.innerHTML = minuite;
    }

    if(minuite > 0){
        getMinuite.innerHTML = minuite;
    }

    if(minuite < 10){
        getMinuite.innerHTML = '0'+ minuite;
    }

    if(minuite < 0){
        minuite = 60;
        getMinuite.innerHTML = minuite;
        hour--
        getHour.innerHTML = hour;
    }

    if(hour > 0){
        getHour.innerHTML = hour;
    }

    if(hour < 10){
        getHour.innerHTML = '0' + hour;
    }

    if(hour < 0){
        hour = 24;
        getHour.innerHTML = hour;
        day--
        getDay.innerHTML = day;
    }

    if(day > 0){
        getDay.innerHTML = day;
    }

    if(day < 10){
        getDay.innerHTML = '0' + day;
    }
}


if(day < 1){
    seconds = 0;
    minuite = 0;
    hour = 0;
    day = 0;
    getSeconds.innerHTML = seconds;
    getMinuite.innerHTML = minuite;
    getHour.innerHTML = hour;
    getDay.innerHTML= day
    clearInterval(interval)
}
