// Your web app's Firebase configuration
const mainConfig = {
    apiKey: "AIzaSyBKTjTMy2Trfs79UHuXHOrgFKSAEQnUYV4",
    authDomain: "vent-92591.firebaseapp.com",
    databaseURL: "https://vent-92591-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vent-92591",
    storageBucket: "vent-92591.appspot.com",
    messagingSenderId: "832851875687",
    appId: "1:832851875687:web:7b3acbe6da4a15371b01c2"
  };
  // Initialize Firebase
  firebase.initializeApp(mainConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("Techtionary_Regs");
  
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
      department: roll,
      name: name,
      email: email,
      message: message,
      phone: phone,
      exited: rate,
    });
  }
  
  
  
  
  
  