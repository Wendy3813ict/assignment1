localStorage.setItem('wendy', '6666');




function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (localStorage.getItem(username) === null) {
    alert(`${username} not exist`);
  } 
  else if(localStorage.getItem(username) !== null){
      if(localStorage.getItem(username) === password){
        alert('welcome');
      } else{
          alert('wrong');
      }
    
    
  }


}
