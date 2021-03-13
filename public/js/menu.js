"use strict";
import { auth } from "./firebase-init.js";

$(document).ready(function () {
  initializePage();
});

function initializePage() {
  auth.onAuthStateChanged(user => {
    if (user) {
      //set up buttons
      setUpYourVideos();
      setUpFriends();
      setUpInviteFriends();
      setUpMessages();
      setUpSignOut();
    } else {
      let userinfo = JSON.parse(localStorage.getItem("userinfo"));
      let usertoken = JSON.parse(localStorage.getItem("fbtoken"));
      if(!userinfo && !usertoken) {
        window.location.href = "/login";
      }
      if (usertoken.status == "connected") {
        fillName(userinfo.name);
      }
    }
  });
}

function setUpYourVideos() {
  //TODO
}

function setUpFriends() {
  //TODO
}

function setUpInviteFriends() {
  //TODO
}

function setUpMessages() {
  //TODO
}

function setUpSignOut() {
  $("#sign-out").click(() => {
    if(auth) {
      auth.signOut()
        .then(() => {
          //dont have to do anything
        })
        .catch(e => alert(e));
    }
  });
}
