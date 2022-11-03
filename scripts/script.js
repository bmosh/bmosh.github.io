function user_name() {
  let name = prompt("What is your name?");
  if (!name) {
    return user_name();
  } else {
    localStorage.setItem('name', name)
    return name;
  }
}
function changeName() {
  myHeading.textContent = "Hello " + user_name() + "!";
}

const myHeading = document.querySelector("h1");

if (localStorage.name) {
  myHeading.textContent = "Hello " + localStorage.getItem('name') + "!";
} else {
  myHeading.onclick = function(){ changeName() };
}


const topHeading = document.getElementsByClassName("navbar-title");

function change_title_text() {
}