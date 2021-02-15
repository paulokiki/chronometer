"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').textContent = '00';
  document.getElementById('minute').textContent = '00';
  document.getElementById('second').textContent = '00';
  document.getElementById('millisecond').textContent = '000';
}



function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').textContent = returnData(hour);
  document.getElementById('minute').textContent = returnData(minute);
  document.getElementById('second').textContent = returnData(second);
  document.getElementById('millisecond').textContent = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

