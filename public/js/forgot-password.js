'use strict';

//CODE FOR CLICKING ON THE CELLS OF THE HOMEPAGE
$(document).ready(function () {
    initializePage();
} );

function initializePage() {
    setUpSubmitButton();
}

function setUpSubmitButton() {
    $('#submit').click(() => {
        //use if viewing from local node server
        window.alert("Check your email to reset your password.");
        window.location.href = "http://localhost:3000/login"; 

        //use if viewing from remote heroku server
        // window.location.href = "herokulink.com/login"
    });
}