// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD_dLSLWFnUSRClo4zbqHsjNizdpSxYqao",
    authDomain: "kwitter-ea523.firebaseapp.com",
    databaseURL: "https://kwitter-ea523-default-rtdb.firebaseio.com",
    projectId: "kwitter-ea523",
    storageBucket: "kwitter-ea523.appspot.com",
    messagingSenderId: "479174516525",
    appId: "1:479174516525:web:a84afa2bcd44bae81f3da4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */

    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}

function redirecitToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chat_room.html";
}


function updateLike(message_id)
{
  console.log("clicked on like button -"+message_id);
  button_id=message_id;
  like=document.getElementById(button_id).value;
  updated_like=Number(like)+1;
  console.log(updated_like);

  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
  });
}



