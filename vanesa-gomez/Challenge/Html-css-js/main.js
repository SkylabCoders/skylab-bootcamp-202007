const button = document.getElementById("loginLogoutButton");
button.onclick = function() {
    changeColour();
}

function changeColour() {
    button.style.backgroundColor === "red" ? button.style.backgroundColor = "green" : button.style.backgroundColor = "red";
}