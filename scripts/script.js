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

myHeading.onclick = function() { changeName() };

if (localStorage.name) {
  myHeading.textContent = "Hello " + localStorage.getItem('name') + "!";
} 

let topHeading = true;

function change_title_text(th) {

  if (topHeading) {
    topHeading = false;
    th.innerHTML = "Rob Mosher";
  } else {
    topHeading = true;
    th.innerHTML = "RM";
  }
}

const toph = document.getElementById("title");

toph.onclick = function() {
  change_title_text(toph);
}

