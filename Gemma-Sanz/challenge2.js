var button = document.querySelector(".button1")

function changeButton() {
    if(button.innerHTML === "Log in"){
        button.innerHTML = "Log out";
    }else if(button.innerHTML === "Log out") {
        button.innerHTML = "Log in";
    }
}