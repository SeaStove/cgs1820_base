let userName = prompt("Please enter your name:");
let favoriteColor = prompt("What is your favorite color?");

if (userName) {
  document.querySelector("#userName").textContent = userName;
} else {
  document.querySelector("#userName").textContent = "Guest";
}

document.querySelector("#userName").style.color = favoriteColor;
