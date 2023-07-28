"use strict";
const user = document.querySelector("#user"),
  overlay = document.querySelector(".overlay"),
  modal = document.querySelector(".modal"),
  closeBtn = document.querySelector(".fa-xmark"),
  registerBtn = document.querySelector(".register__btn"),
  signInBtn = document.querySelector(".sign-in__btn"),
  signInPanel = document.querySelector(".sign-in__block"),
  registerPanel = document.querySelector(".register__block"),
  passcodeField = document.querySelector(".passcode input"),
  forms = document.querySelectorAll("form"),
  navbar = document.querySelector("#menu"),
  hamburger = document.querySelector(".hamburger__wrapper"),
  topBar = document.querySelector(".top__bar"),
  midBar = document.querySelector(".mid__bar"),
  baseBar = document.querySelector(".base__bar"),
  eyeIcons = document.querySelectorAll(".eye");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

user.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

eyeIcons.forEach((eye) => {
  eye.addEventListener("click", () => {
    const passcodeField = eye.parentElement.querySelector("input");
    if (passcodeField.type === "password") {
      eye.classList.replace("fa-eye", "fa-eye-slash");
      passcodeField.type = "text";
    } else {
      eye.classList.replace("fa-eye-slash", "fa-eye");
      passcodeField.type = "password";
    }
  });
});

registerBtn.addEventListener("click", () => {
  registerBtn.classList.add("focus");
  registerPanel.classList.remove("hide");
  signInBtn.classList.remove("focus");
  signInPanel.classList.add("hide");
});

signInBtn.addEventListener("click", () => {
  signInBtn.classList.add("focus");
  signInPanel.classList.remove("hide");
  registerBtn.classList.remove("focus");
  registerPanel.classList.add("hide");
});

hamburger.addEventListener("click", () => {
  topBar.classList.toggle("first__cross");
  midBar.classList.toggle("middle__fade");
  baseBar.classList.toggle("second__cross");
  navbar.classList.toggle("click");
});

const ctrlReg = () => {
  registerPanel.classList.add("active__field");
  registerBtn.classList.add("focus");
  registerPanel.classList.remove("hidden");
};
