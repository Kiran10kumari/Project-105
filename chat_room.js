function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name-"+Room_name);
   row="<div class='room_name'id="+Room_name+"onclick='redirecitToRoomName(this,id)'>#"+Room_name+"<div><hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
