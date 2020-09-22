var countDownDate = new Date("Sept 26, 2020 09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("soon").innerHTML = days 
  + "<span class='w3-small'> DAYS</span> " + hours 
  + "<span class='w3-small'> HOURS</span> "+ minutes 
  + "<span class='w3-small'> MINUTES</span>" + seconds 
  + "<span class='w3-small'> SECONDS</span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("soon").outerHTML = "";
  }
}, 1000);