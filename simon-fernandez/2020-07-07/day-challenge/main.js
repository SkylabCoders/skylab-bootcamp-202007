function changeLoginButton() {
    if (document.getElementById("loginButton").innerHTML==="Login") {
        document.getElementById("loginButton").innerHTML="Logout";
    }else{
        document.getElementById("loginButton").innerHTML="Login";
    }
}