function sayHi() {
    do {
        var userName = prompt("Enter your name");
    } while (userName.length == 0);
    document.querySelector(".user-name").innerHTML = "Hi " + userName;
}