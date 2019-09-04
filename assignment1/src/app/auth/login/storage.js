






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
alert(`welcome ${addedusername} and email ${str}` );
}



function Login() {
    var username = document.getElementById("username").value;
    if(localStorage.getItem(username)!==null){
        alert(`welcome ${username}`);
        
    } else{
        alert(`${username} not exists`);
    }



}

function logout() {
    var username = document.getElementById("username").value;
    if(username !== null){
        localStorage.removeItem(username);

    } else{
        window.localStorage.clear();
    }
    
    
}
