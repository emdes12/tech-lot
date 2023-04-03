
// collaspe services
// const collaspeBody = document.getElements("show");
const collaspeHead = document.getElementsByClassName("service-heading");

for (i = 0; i < collaspeHead.length; i++) {
  collaspeHead[i].addEventListener("click", collaspeFunc);
}

function collaspeFunc() {
  // this.parentNode.classList.toggle("show");
  console.log("clicked");
  this.parentElement.classList.toggle("show");
}
