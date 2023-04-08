// show board
const errBoard = document.getElementById("not-found");

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    let myname = prompt("HEY");
    if (myname === "EmDes") {
      errBoard.style.display = "none";
    }
  }
});

// forget me
const forPas = document.getElementById("forget-password");

forPas.addEventListener("click", () => {
  alert("Chat me for your TikTok passcode");
});

// the authentication board
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("form submitted");
  window.location.href = "./_";
});
