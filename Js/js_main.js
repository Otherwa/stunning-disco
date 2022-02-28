//timer
var countDownDate = new Date("Mar 4, 2022 00:00:00").getTime(); //Set date on event
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
    document.getElementById("demo").innerHTML = "Webphobia 404";
    document.querySelector("#demo").style.fontSize = "2rem";
    
  }
}, 1000);
//////////////////cookies


///count

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
 function Redirect_stu1(){
   window.open('contact_stu.html', '_self');
 }
 function Redirect_stu2(){
  window.open('contact_mys.html', '_self');
}
function Redirect_stu3(){
  window.open('contact_tech.html', '_self');
}


function instructions(){
  var display = document.getElementById("show");
  display.style.display="block";
  document.getElementById("doshow").style.display="none";

}

function instructionscls(){
  var display = document.getElementById("show");
  display.style.display="none";
  document.getElementById("doshow").style.display="block";
  }

  
function instructions2(){
  var display = document.getElementById("show1");
  display.style.display="block";
  document.getElementById("doshow1").style.display="none";

}

function instructionscls2(){
  var display = document.getElementById("show1");
  display.style.display="none";
  document.getElementById("doshow1").style.display="block";
  }

  function instructions3(){
    var display = document.getElementById("show2");
    display.style.display="block";
    document.getElementById("doshow2").style.display="none";
  
  }
  
  function instructionscls3(){
    var display = document.getElementById("show2");
    display.style.display="none";
    document.getElementById("doshow2").style.display="block";
    }

  function ref1(){
    window.open("https://apps.apple.com/us/app/stumble-guys/id1541153375","_self")
  }

  function ref2(){
    window.open("https://play.google.com/store/apps/details?id=com.kitkagames.fallbuddies&hl=en_IN&gl=US","_self")
  }