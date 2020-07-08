function sayHi() {
    do {
        var userName = prompt("Enter your name");
    } while (userName.length == 0);
    document.querySelector(".user-name").innerHTML = "Hi git " + userName;

    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}