// Your web app's Firebase configuration
const mainConfig = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: "  ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " "
  };
  // Initialize Firebase
  firebase.initializeApp(mainConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("Minecraft_Regs");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
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
    console.log(name,message,phone,rate);
  
    if(name=="" || phone==""){
      return alert("Fill again Cabron! (speaks in Spanish)");
    }
    else{
    saveContactInfo(name,message,phone,rate);
    document.querySelector(".status").style.display ="block";
    document.querySelector(".Form_hid").style.display="none";
    setTimeout(() => {
      document.querySelector(".status").style.display="none";
    },100006900);
    document.querySelector(".Name").innerHTML = name;
    document.querySelector(".contact-form").reset();
    }
  }
  
  // Save infos to Firebase
  function saveContactInfo(name,message,phone,rate) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      name: name,
      message: message,
      phone: phone,
      exited: rate,
    });
  }
  
  
  
  
  
  
