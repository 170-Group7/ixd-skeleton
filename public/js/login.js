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
        window.location.href = "http://localhost:3000/"; 

        //use if viewing from remote heroku server
        // window.location.href = "herokulink.com/login"
    });
}