const timer = document.querySelector('#value');
const pause = document.querySelector('#stop')

let time = 0, interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
 interval =  setInterval(showTime, 1000);
}

function toHHMMSS(time) {
  var hour = Math.floor(time / 3600);
  var minute = Math.floor((time - hour * 3600) / 60);
  var second = time - hour * 3600 - minute * 60;

  hour = `${hour}`.padStart(2, '0');
  minute = `${minute}`.padStart(2, '0');
  second = `${second}`.padStart(2, '0');

  return hour + ":" + minute + ":" + second;
}

function pauseResume() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pause.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  pause.innerHTML = 'PAUSE';
  time = 0;
  timer.innerHTML = toHHMMSS(time);
}

//another method

/* var value = document.getElementById("value");

var startFlag = false;
var second = 0, hour = 0, minute = 0;

value.innerHTML = hour + minute + second

function start() {
  stopWatch();
}


function stopWatch() {
  
  hour = parseInt(hour);
  minute = parseInt(minute);
  second = parseInt(second);

  second  = second + 1;

  if(second == 10) {
    minute++;
    second = 0;
  }
  if(minute == 10) {
    minute = 0;
    second= 0 ;
    hour++;
  }
  
  hour = (hour < 10 || hour == 0) ? ("0" + hour) : hour;
  minute = (minute < 10 || minute == 0) ? ("0" + minute) : minute;
  second = (second < 10) ? ("0" + second) : second;
  
  value.innerHTML = hour + ":" + minute + ":" + second; 
  
  setInterval(stopWatch, 1000);
}

*/ 





// const timer = document.querySelector('#time');
// const start_btn = document.querySelector('#start_btn');
// const pause_btn = document.querySelector('#pause_btn');
// const reset_btn = document.querySelector('#reset_btn');

// let time = 0,
//   interval;

// function showTime() {
//   time += 1;
//   timer.innerHTML = toHHMMSS(time);
// }

// function start() {
//   interval = setInterval(showTime, 1000);
//   hideBtn([start_btn]);
//   showBtn([pause_btn, reset_btn]);
// }

// function pause() {
//   if (interval) {
//     clearInterval(interval);
//     interval = null;
//     pause_btn.innerHTML = 'RESUME';
//   } else {
//     interval = setInterval(showTime, 1000);
//     pause_btn.innerHTML = 'PAUSE';
//   }
// }

// function reset() {
//   clearInterval(interval);
//   interval = null;
//   pause_btn.innerHTML = 'PAUSE';
//   time = 0;
//   timer.innerHTML = toHHMMSS(time);
//   hideBtn([pause_btn, reset_btn]);
//   showBtn([start_btn]);
// }

// function toHHMMSS(time) {
//   let hours = Math.floor(time / 3600);
//   let minutes = Math.floor((time - hours * 3600) / 60);
//   let seconds = time - hours * 3600 - minutes * 60;

//   hours = `${hours}`.padStart(2, '0');
//   minutes = `${minutes}`.padStart(2, '0');
//   seconds = `${seconds}`.padStart(2, '0');

//   return hours + ':' + minutes + ':' + seconds;
// }

// function showBtn(btnArr) {
//   btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
// }
// function hideBtn(btnArr) {
//   btnArr.forEach((btn) => (btn.style.display = 'none'));
// }
