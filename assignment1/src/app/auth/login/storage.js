function AddtoLocalstorage() {
  var addedusername = document.getElementById("createUser").value;
  var addedemail = document.getElementById("Addemail").value;

  const user = {
    groupid: "",
    chanelid: "",
    email: ""
  }
  let str = JSON.stringify(user);

  localStorage.setItem(addedusername, str);
  alert(`welcome ${addedusername} and detail ${str}`);
}




function Login() {
  var username = document.getElementById("username").value;
  if (localStorage.getItem(username) !== null) {
    alert(`welcome ${username}`);

  } else {
    alert(`${username} not exists`);
  }



}

function logout() {
  var username = document.getElementById("username").value;
  if (username !== null) {
    localStorage.removeItem(username);

  } else {
    window.localStorage.clear();
  }


}
function CreateGroups(){

let options = {
    "available": "",
    "student1": "" 
}

    var rows = document.getElementById("creategroup").value;
  
    var id = document.getElementById("groupid").value;
  
    let str = JSON.stringify(options);
  
    var myHtml = '';
  
    localStorage.setItem(id, str);
  
    for (var i = 0; i < rows; i++) {
        let newElement = document.createElement('input');

      document.body.appendChild(newElement);
    }

    alert(rows);

}

// function CreateGroups() {
//     const group = {
//       available: "",
//       student = {
//         username,
//         username,
//         username,
//         username
//       }
//     }
//     var rows = document.getElementById("creategroup").value;
  
//     var id = document.getElementById("groupid").value;
  
//     let str = JSON.stringify(group);
  
//     var myHtml = '';
  
//     localStorage.setItem(id, str);
  
//     let newElement = document.createElement('panel-body');
//     for (var i = 0; i < rows; i++) {
//       document.body.appendChild(newElement);
//     }
//   }