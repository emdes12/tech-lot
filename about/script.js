// mission and vision
const parentEl = document.querySelector(".mission-vision");
// const indicators = document.querySelector("indicators").children;

function swithchBtwnMissionVision() {
  setInterval(() => {
    parentEl.classList.toggle("active");
  }, 7000);
}

swithchBtwnMissionVision();
