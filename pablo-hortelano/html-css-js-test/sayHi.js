function displayName() {
   var greeting = "Hello ";
   var name = prompt("Introduce your name");
   if(name) {
    document.getElementById('demo2').innerHTML = greeting + name
   }
}