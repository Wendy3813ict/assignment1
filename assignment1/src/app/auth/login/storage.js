






function AddtoLocalstorage() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    let str = JSON.stringify(email);

localStorage.setItem(username, str);
alert(`welcome ${username} and email ${str}` );



}

function logout() {
    var username = document.getElementById("username").value;

    localStorage.removeItem(username);
}
