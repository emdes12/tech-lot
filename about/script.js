// mission and vision
const parentEl = document.querySelector(".mission-vision");
const indicator1 = document.querySelector(".indicator1");
const indicator2 = document.querySelector(".indicator2");

function swithchBtwnMissionVision() {
  setInterval(() => {
    parentEl.classList.toggle("active");
  }, 7000);
}

swithchBtwnMissionVision();

indicator1.addEventListener("click", () => {
  parentEl.classList.remove("active");
});

indicator2.addEventListener("click", () => {
  parentEl.classList.add("active");
});
