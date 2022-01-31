//timer
var countDownDate = new Date("Feb 14, 2022 00:00:00").getTime(); //Set date on event
// Update 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var timerem = countDownDate - now;
    // days, hours, minutes and seconds
  var days = Math.floor(timerem / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timerem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timerem % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timerem % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "hrs "+ minutes + "min " + seconds + "sec " + " (tentative)";
  if (timerem < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = " Ready Player 1 ?";
    document.querySelector("#demo").style.fontSize = "2rem";
    
  }
}, 1000);
//////////////////cookies


function myFunction() {
   var element = document.querySelector('.topnav');
   element.classList.toggle("dark-mode");
}

function disp(){
  localStorage.setItem("cookieBannerDisplayed", "true");
  document.querySelector(".cookie-container").style.bottom ="-100%";
  
}

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    document.querySelector(".cookie-container").style.bottom ="0%";
}}, 2000);

/////////window
function Redirect(){
  window.open('contact_form.html', '_self');
}



