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
const forPas = document.getElementsByClassName(".forget-password");

forPas.addEventListener("click", () => {
  alert("Chat me for your TikTok passcode");
});
