"use strict";
// import { auth } from "./firebase-init.js";

$(document).ready(function () {
  initializePage();
});

function initializePage() {
  setUpSignUpButton();
}

function setUpSignUpButton() {
  $("#sign-up-btn").click(() => {
    //Make sure Password and Confirm Password are the same
    const pass = $("#Pass").val();
    const cPass = $("#confirm-pass").val();

    if(pass != cPass){
      alert("Passwords do not match. Try again.");
    }
    else {
      alert("Check your email to verify your account.");
      window.location.href = "/login"
    }
  });
}
