// switch form anim
const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form");
const regBtn = document.querySelector("#reg-btn");
const regForm = document.querySelector(".reg-form");
const formIndicator = document.querySelector(".bottom-line");

let switchToReg = () => {
  regForm.style.transform = "translateX(-400px)";
  loginForm.style.transform = "translateX(-400px)";
  regBtn.classList.add("active");
  loginBtn.classList.remove("active");
  formIndicator.style.transform = "translateX(100px)";
};

regBtn.addEventListener("click", switchToReg);

let switchToLogin = () => {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  regBtn.classList.remove("active");
  loginBtn.classList.add("active");
  formIndicator.style.transform = "translateX(0px)";
};

loginBtn.addEventListener("click", switchToLogin);
