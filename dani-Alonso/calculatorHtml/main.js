var button = document.querySelector("#dark-mode");

button.addEventListener("click", function (event) {
  event.preventDefault();
  var body = document.querySelector(".container");

  if (
    body.style.backgroundColor === "rgb(28, 49, 2)" ||
    !body.style.backgroundColor
  ) {
    button.innerHTML = "Light Mode";
    body.style.backgroundColor = "black";
  } else if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "rgb(28, 49, 2)";
    button.innerHTML = "Dark Mode";
  }
});
