const menuIcon = document.querySelector(".mobile-menu-icon");
const mobMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
  mobMenu.classList.toggle("hidd");
  setTimeout(function () {
    mobMenu.classList.toggle("active");
  }, 500);
});

// collaspe services
const collaspeHead = document.getElementsByClassName("service-heading");

for (i = 0; i < collaspeHead.length; i++) {
  collaspeHead[i].addEventListener("click", collaspeFunc);
}

// fuction to collapse and expand service
function collaspeFunc() {
  this.parentElement.classList.toggle("show");
}

// to update year
const footYear = document.querySelector(".foot");
function updateYear() {
  let date = new Date();
  let year = date.getFullYear();
  footYear.innerHTML = `&copy ${year} Tech-Lot`;
}
updateYear();

// countdown animation
const projectEl = document.querySelector(".projects");
const clientEl = document.querySelector(".clients");
const staffEl = document.querySelector(".staffs");

let num = 0;

let interval = setInterval(function () {
  num++;

  if (num < 12) {
    staffEl.textContent = num;
  } else {
    staffEl.textContent = 12;
  }

  if (num < 120) {
    clientEl.textContent = num;
  } else {
    clientEl.textContent = 120;
  }

  if (num < 1000) {
    projectEl.textContent = num;
  } else if (num < 1200) {
    projectEl.textContent = "1.1K";
  } else {
    clearInterval(interval);
    projectEl.textContent = "1.3K";
  }
}, 0.3);

window.addEventListener("scroll", () => {
  let scrollMeasure = window.pageYOffset;
  const reviewTop = document.querySelector(".list-review").offsetTop;
  let windowHeight = window.innerHeight;
  if (
    scrollMeasure > reviewTop - windowHeight &&
    scrollMeasure < reviewTop + 100
  ) {
    // console.log("on it");
    interval();
  } else {
    // console.log("out of bound");
    num = 0;
  }
});
