// Your web app's Firebase configuration
const mainConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let name3 = document.getElementById("name3").value;
    let year = document.getElementById("name4").value;
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
  
    if(name1=="" || email=="" || roll =="" || phone==""){
      return alert("Fill again Cabron! (speaks in Spanish)");
    }
    else{
    saveContactInfo(name1,name2,name3, email, message,roll,phone,rate,year);
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
  function saveContactInfo(name1,name2,name3, email, message,roll,phone,rate,year) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      department: roll,
      grp_leader: name1,
      grp_per1: name2,
      grp_per2: name3,
      email: email,
      message: message,
      phone: phone,
      exited: rate,
      year : year,
    });
  }
  
  
  function whats2_1(){
    window.open("https://chat.whatsapp.com/FHAl8S8Ry1YAwtnHHV0ULo","_self");
  }
  function whats2_2(){
    window.open("https://chat.whatsapp.com/JtSieLIJlFNJwJoeClVGiZ","_self");
  }
  function whats2_3(){
    window.open("https://chat.whatsapp.com/LV4pY6ePPXb29vf1x0TUBT","_self");
  }
  
  
  