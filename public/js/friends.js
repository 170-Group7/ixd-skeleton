"use strict";
import { auth, db } from "./firebase-init.js";
import { getConversations, getFriends, friend } from "./firebase-db.js";

var friendDiv =
  '<div class="list-group-item">' + '	<p class="username"></p>' + "</div>";
const CHEV_RIGHT =
  '<svg id="chev-right" style="width:24px;height:24px" viewBox="0 0 24 24">' +
  '   <path fill="#ffbb3f" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z" />' +
  "</svg>";
const CHEV_DOWN =
  '<svg id="chev-down" style="width:24px;height:24px" viewBox="0 0 24 24">' +
  '    <path fill="#ffbb3f" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z" />' +
  "</svg>";

var addOpen = false;
let userinfo = JSON.parse(localStorage.getItem("userinfo"));
let usertoken = JSON.parse(localStorage.getItem("fbtoken"));
$(document).ready(function () {
  initializePage();
});
function setup() {
  let elToAdd = jQuery(friendDiv);
  elToAdd.addClass("no-friends");
  elToAdd.find("p").text("No friends found.");
  $("#friend-list-container").append(elToAdd);
  populateFriends();
  $("#search-input").keyup(search);
  setUpChevron();
  setUpAddButton();
}
async function initializePage() {
  // const initializePage = async () => {
  auth.onAuthStateChanged(async user => {
    if (user) {
      //do things
      setup();
    } else {
      //do other things
      if (usertoken.status == "connected") {
        setup();
      } else {
        window.location.href = "/login";
      }
    }
  });
}

//Populates the friend-list-container with currentUsers friends
async function populateFriends() {
  let friendsList = await getFriends();
  if (friendsList.length > 0) {
    $(".no-friends").hide();
    friendsList.sort();
    let friendListContainer = $("#friend-list-container");
    friendsList.forEach(friend => {
      let elToAdd = jQuery(friendDiv);
      elToAdd.find("p").text(friend);
      friendListContainer.append(elToAdd);
    });
  }
}

//Populates the friend-list-container with names in the nameList
function populateFriendsFrom(nameList) {
  let friendListContainer = $("#friend-list-container");
  friendListContainer.empty();
  nameList.forEach(name => {
    let elToAdd = jQuery(friendDiv);
    elToAdd.find("p").text(name);
    friendListContainer.append(elToAdd);
  });
}

//Callback function used to filter friends in friend-list-container
async function search() {
  let query = $("#search-input").val().toUpperCase();
  let count = 0;
  $(".list-group-item").each(function (i) {
    let name = $(this).find("p").text();
    if (!name.toUpperCase().includes(query)) {
      $(this).hide();
    } else {
      $(this).show();
      count++;
    }
  });

  let friendListContainer = $("#friend-list-container");
  if (count == 0) {
    //show message saying no friends
    // let elToAdd = jQuery(friendDiv);
    // elToAdd.addClass('no-friends');
    // elToAdd.find('p').text('No friends found.');
    // friendListContainer.append(elToAdd);
    $(".no-friends").show();
  } else {
    $(".no-friends").hide();
  }
}

//Sets up the chevron (dropdown) button with click handler
function setUpChevron() {
  $("#chevron").click(function () {
    let chevRightVisible = $("#chev-right").is(":visible");
    let chevDownVisible = $("#chev-down").is(":visible");

    if (addOpen) {
      addOpen = !addOpen;
      $("#add-div").hide();
      if (chevDownVisible) {
        $("#chev-down").remove();
      }
      $(this).append(CHEV_RIGHT);
    } else {
      addOpen = !addOpen;
      $("#add-div").show();
      if (chevRightVisible) {
        $("#chev-right").remove();
      }
      $("#chevron").append(CHEV_DOWN);
    }
  });
}

//Sets up the add button with click handler
function setUpAddButton() {
  $("#add-friend-btn").click(function () {
    let userEmail = auth.currentUser.email;
    let friendEmail = $("#add-friend-text").val();

    friend(userEmail, friendEmail);
  });
}
