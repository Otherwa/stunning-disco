//timer
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime(); //Set date on event
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
    document.getElementById("demo").innerHTML = "FINISHED ?";
  }
}, 1000);
//////////////////cookies
setTimeout(function (){
  let cookieAccepted = localStorage.getItem("iscookieset")
  if (cookieAccepted != "yes"){
    document.querySelector(".cookie").style.display = "block";
  }
  else{
    document.querySelector(".cookie").style.display = "none";
  }
}, 20)
function reject(){
  document.querySelector(".cookie").style.display = "none";
  window.open('nft.html', '_self');

}
function accept(){
  document.querySelector(".cookie").style.display = "none";
  localStorage.setItem("iscookieset", "yes");
  localStorage.setItem("Framework","Atharv_Desai");
  document.cookie = "user=User; expires=Thu, 1 Dec 2023 12:00:00 UTC; path=/";
  
}

/////////window
function Redirect(){
  window.open('contact_form.html', '_self');
}



