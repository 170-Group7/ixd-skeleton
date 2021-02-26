'use strict';

//CODE FOR CLICKING ON THE CELLS OF THE HOMEPAGE
$(document).ready(function () {
    initializePage();
} );

function initializePage() {
    setUpLogInButton();
}

function setUpLogInButton() {
    $('#log').click(() => {
        //use if viewing from local node server
        // window.location.href = "http://localhost:3000/index"; 

        //use if viewing from remote heroku server
        window.location.href = "https://team7-a6.herokuapp.com/index"
    });
}