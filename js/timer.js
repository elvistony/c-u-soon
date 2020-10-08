var countDownDate = new Date("Oct 17, 2020 09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("soon").innerHTML = days 
  + "<span class='w3-small'> DAYS </span> " + hours 
  + "<span class='w3-small'> HOURS </span> "+ minutes 
  + "<span class='w3-small'> MINUTES </span>" + seconds 
  + "<span class='w3-small'> SECONDS </span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('caption').innerText="VIRTUAL EVENT IS NOW LIVE";
    document.getElementById("soon").innerHTML = `
    <a target="_blank" style="font-weight: bold;" href="https://elvistony.github.io/c-u-soon/live" class="mons w3-small w3-button w3-round-large w3-orange w3-large w3-hover-yellow "> Join The Live Event! <br>       <img src="https://elvistony.github.io/c-u-soon/img/google.png" alt="" class="w3-image" width="15%">
    </a>
    `;
  }
}, 1000);