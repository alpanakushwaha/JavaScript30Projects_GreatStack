let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

// console.log(currentTime.getHours());
// console.log(currentTime.getHours());
// console.log(currentTime.getHours());
