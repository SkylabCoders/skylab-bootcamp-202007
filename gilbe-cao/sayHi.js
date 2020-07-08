function sayHi() {
  var greeting;
  var name = window.prompt("Enter your name");
  if (name) {
    greeting = "Hello " + name;
    document.getElementById("demo").innerHTML = greeting;
  }
}
