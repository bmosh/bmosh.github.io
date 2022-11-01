function user_name() {
  let name = prompt("What is your name?");
  if (!name) {
    return user_name();
  } else {
    return name;
  }
}

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello " + user_name() + "!";

const topHeading = document.getElementsByClassName("navbar-title");

function change_title_text() {
  document.getElementsByClassName("navbar-title").textContent = "Rob Mosher";
}