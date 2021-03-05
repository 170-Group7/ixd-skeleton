"use strict";
import { auth } from "./firebase-init.js";
let isFB = false;
let userinfo = JSON.parse(localStorage.getItem("userinfo"));
let usertoken = JSON.parse(localStorage.getItem("fbtoken"));
$(document).ready(function () {
  initializePage();
});

function initializePage() {
  auth.onAuthStateChanged(user => {
    if (user) {
      let atIndex = user.email.indexOf("@");
      let name = user.email.slice(0, atIndex);
      fillName(name);
    } else {
      console.log(usertoken);
      console.log(userinfo);
      if (usertoken.status == "connected") {
        fillName(userinfo.name);
      } else {
        //window.location.href = "/login";
      }
    }
  });
}

function fillName(name) {
  let text = $("#greeting").text();
  $("#greeting").text(`${text} ${name}`);
}

async function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log("Facebook login status changed.");
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === "connected") {
    // Logged into your app and Facebook.
    console.log("Successfully logged in with Facebook");
    isFB = true;
    FB.api("/me?fields=name,first_name,picture.width(480)", changeUser);
  }
  if (response.status === "unknown") {
    // Logged into your app and Facebook.
    alert("Facebook login failed. Please refresh the page and try again.");
  }
}

function changeUser(response) {
  $(".facebookLogin").hide();
  window.location.href = "/index";
  fillName(name);
  //$("#name").text(response.name);
  //$("#photo").attr("src", response.picture.data.url);
}
