// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzGG1vd_tO7GYYSFWmHcCyvR5HAcviAlk",
    authDomain: "practice-test-3d58a.firebaseapp.com",
    databaseURL: "https://practice-test-3d58a-default-rtdb.firebaseio.com",
    projectId: "practice-test-3d58a",
    storageBucket: "practice-test-3d58a.appspot.com",
    messagingSenderId: "456960448726",
    appId: "1:456960448726:web:d184f8215c9640a24e9177"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }