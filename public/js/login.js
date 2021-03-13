"use strict";
import { auth } from "./firebase-init.js";

$(document).ready(function () {
  initializePage();
});

function initializePage() {
  auth.onAuthStateChanged(user => {
    if (user) {
      window.location.href = "/index";
    } else {
      setUpLogInButton();

      $(".message a").click(function () {
        $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
      });
    }
  });
}

function setUpLogInButton() {
  $("#log").click(() => {
    //get user name / email
    const userName = $("#Uname").val();
    const pass = $("#Pass").val();

    auth
      .signInWithEmailAndPassword(userName, pass)
      .then(userCredential => {
        window.location.href = "/index";
      })
      .catch(e => alert(e));
  });
}
