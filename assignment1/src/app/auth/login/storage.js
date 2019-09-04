





function AddtoLocalstorage() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;

    let str = JSON.stringify(email);

localStorage.setItem(username, str);
alert(str);



}
