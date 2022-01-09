//timer
var countDownDate = new Date("Jan 15, 2022 00:00:00").getTime(); //Set date on event
// Update 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var timerem = countDownDate - now;
    // days, hours, minutes and seconds
  var days = Math.floor(timerem / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timerem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timerem % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timerem % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "hrs "+ minutes + "min " + seconds + "sec ";
  if (timerem < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = " Ready?";
    document.querySelector("#demo").style.fontSize = "2rem";
    
  }
}, 1000);
//////////////////cookies


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


