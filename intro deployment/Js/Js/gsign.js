var myName;
var email;

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  localStorage.setItem("Id",profile.getId());
  myName=profile.getName();
  email=profile.getEmail();
  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  document.querySelector(".data").style.display ="block";
  document.querySelector(".g-signin2").style.display="none";
}

function signOut() {
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
console.log('User signed out.');
document.querySelector(".data").style.display ="none";
  document.querySelector(".g-signin2").style.display="inline-block";
});
}
//chat
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


//send message to Firebase
function sendMessage() {
  // get message
  var message = document.getElementById("message").value;
  document.getElementById("message").value = "";
  // save in database
  firebase.database().ref("messages").push().set({
      "sender": myName,
      "message": message,
      "email":email
  });

  // prevent form from submitting
  return false;
}
//Storage message
firebase.database().ref("messages").on("child_added", function (snapshot) {
  var html = "";
  // give each message a unique ID
  
  html += snapshot.val().sender + ": " + snapshot.val().message;
  html += "\n";
  document.getElementById("messages").innerHTML += html;
});
