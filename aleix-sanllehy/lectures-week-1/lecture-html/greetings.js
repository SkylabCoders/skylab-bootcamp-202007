function greetings () {
    let name = window.prompt("Hello Stranger, please insert your name");
    if (name) {
        document.getElementById('demo').innerHTML = "Hello, " + name;
    }
}

document.getElementById("name").addEventListener("click",function(){
    greetings ();
})
