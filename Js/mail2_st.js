// Your web app's Firebase configuration
const mainConfig = {
    apiKey: "A ",
    authDomain: "vent-9 ",
    databaseURL: "https://vent- ",
    projectId: "ve ",
    storageBucket: "vent- ",
    messagingSenderId: " ",
    appId: " "
  };
  // Initialize Firebase
  firebase.initializeApp(mainConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("Stumble_Regs");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let roll = document.getElementById("roll").value;
    let phone = document.getElementById("phone").value;
    var rate;
    if(document.getElementById("min").checked == true){
      var rate =document.getElementById("min").value;
    }
    else if(document.getElementById("mid").checked == true){
      var rate =document.getElementById("mid").value;
    }
    else{
      var rate =document.getElementById("max").value;
    }
    // console.log(name, email, message,roll,phone,rate);
  
    if(name=="" || email=="" || roll =="" || phone==""){
      return alert("Fill again Cabron! (speaks in Spanish)");
    }
    else{
    saveContactInfo(name, email, message,roll,phone,rate);
    document.querySelector(".status").style.display ="block";
    document.querySelector(".Form_hid").style.display="none";
    setTimeout(() => {
      document.querySelector(".status").style.display="none";
    },10006900);
    document.querySelector(".Name").innerHTML = name;
    document.querySelector(".contact-form").reset();
    }
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message,roll,phone,rate) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      department:roll,
      name: name,
      email: email,
      message: message,
      phone: phone,
      exited: rate,
    });
  }
  
  function whats1(){
  window.open("https://chat.whatsapp.com/KbWfM9dcW7VGnl7RIjymrd","_self");
  }
  
  
  
  
