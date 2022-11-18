var seconds = 00;
var tens = 00;
var seconds2 = 00;
var tens2 = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var appendreadyTens = document.getElementById("readytens");
var appendreadySeconds = document.getElementById("readyseconds");
var interval;
var interval2;
var recordTime;


function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}


function breakTimer() {
  tens2++;
  if (tens2 < 9) {
    appendreadyTens.innerHTML = "0" + tens2;
  }
  if (tens2 > 9) {
    appendreadyTens.innerHTML = tens2;
  }
  if (tens2 > 99) {
    seconds2++;
    appendreadySeconds.innerHTML = "0" + seconds2;
    tens2 = 0;
    appendreadyTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendreadySeconds.innerHTML = seconds;
  }

}


function myFunction() {
  var x = document.getElementById("dropdown2").value;
  switch (x) {
    case "ready":
      appendreadyTens = document.getElementById("readytens");
      appendreadySeconds = document.getElementById("readyseconds");
      clearInterval(interval2);
      interval = setInterval(startTimer, 10);
      interval2 = setInterval(breakTimer, 10);
      break;

    case "Logout":
      interval = clearInterval(interval);
      clearInterval(interval2);
      break;

    case "Reserved":
      clearInterval(interval2);
      break;

    case "Not Ready":
      clearInterval(interval2);
      break;

    case "Bio Sick":
      appendreadyTens = document.getElementById("nottens");
      appendreadySeconds = document.getElementById("notseconds");
      interval2 = setInterval(breakTimer, 10);
      break;

    case "Feedback":
      appendreadyTens = document.getElementById("nottens");
      appendreadySeconds = document.getElementById("notseconds");
      clearInterval(interval2);
      interval2 = setInterval(breakTimer, 10);
      break;

    case "Lunch":
        appendreadyTens = document.getElementById("nottens");
        appendreadySeconds = document.getElementById("notseconds");
        clearInterval(interval2);
        interval2 = setInterval(breakTimer, 10);
        break;
    default:

  }

}
