function changeButton(){
    var button = document.getElementById("login-button");
    if (button.innerHTML =="Login") button.innerHTML = "Logout";
    else button.innerHTML = "Login";
}