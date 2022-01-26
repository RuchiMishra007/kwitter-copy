//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDS7tiRVhgDJzqK7eNp-gMTzdv7Q6IP4ck",
      authDomain: "kwitter-2add3.firebaseapp.com",
      databaseURL: "https://kwitter-2add3-default-rtdb.firebaseio.com",
      projectId: "kwitter-2add3",
      storageBucket: "kwitter-2add3.appspot.com",
      messagingSenderId: "473215130529",
      appId: "1:473215130529:web:34f27f1e325bb5b56789e0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });

   document.getElementById("msg").value = "";
}

//End code
      } });  }); }
getData();
