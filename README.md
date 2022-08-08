# Stunning-disco

![download](https://user-images.githubusercontent.com/67428572/163595229-3f5ec050-823c-4a38-b7d7-a494af5dd962.png)
![download](https://user-images.githubusercontent.com/67428572/163595248-3e01628b-29e9-4af8-9728-88d41eab00a9.png)
![download](https://user-images.githubusercontent.com/67428572/163595272-5fc832ea-436c-4ef4-acae-241241f0d9bc.png)


# Prequisite

- `Firebase account.` [documentation](https://firebase.google.com/docs?authuser=0&hl=en)
- `basic JS.`
- `Google fonts API.` [documentation](https://fonts.google.com/knowledge)
- `Google Analaytics API.` [documentation](https://developers.google.com/analytics)
- `Scroll JS.` [documentation](https://scrollrevealjs.org/)

## In a nutshell
![images](https://user-images.githubusercontent.com/67428572/163597389-bb0c7c56-91e5-4599-ac12-ee59247a1217.jpg)

and

![all-might-youre-next](https://user-images.githubusercontent.com/67428572/163597542-d518abed-bbc9-4e13-b785-7cf2418eed51.gif)


# Introduction

- Interfacing form data by storing it in JSON format in `LiveDataBase` [NoSQL Database DOM oriented]//Firebase
- [For Reference] (https://youtu.be/zx2YoBMfflM)
-  Static page can be rendered as per the person whose going to implement this

### Database bridge
## Basic Snippet for 
`Collecting Form Data`
```
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
let contactInfo = firebase.database().ref("Inventrix_Regs");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.getElementById(" ").value;
  let email = 
  let message = 
  let roll = 
  let phone = 
  var rate;
 //all your validation code
  }
  else{
  saveContactInfo(name, email, message,roll,phone,rate);
  //err code
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
```

# Overview

![sys_flow](https://user-images.githubusercontent.com/67428572/145678966-fb2afd11-97ba-4ef2-b298-5e503a30ada5.png)
