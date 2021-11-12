
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD1-Sdpv0YxYuQoEFWlbqL8-AC9yed2nTU",
      authDomain: "classtest-79e00.firebaseapp.com",
      databaseURL: "https://classtest-79e00-default-rtdb.firebaseio.com",
      projectId: "classtest-79e00",
      storageBucket: "classtest-79e00.appspot.com",
      messagingSenderId: "557073404633",
      appId: "1:557073404633:web:269fc1802f8bfececd64c8"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}