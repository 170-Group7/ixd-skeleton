'use strict';
import {auth} from './firebase-init.js';

$(document).ready(function () {
    initializePage();
} );

function initializePage() {
    auth.onAuthStateChanged((user) => {
        if(user) {
            window.location.href = '/index';
        }
        else {
            setUpLogInButton();
        }
    })
}

function setUpLogInButton() {
    $('#log').click(() => {
        //get user name / email
        const userName = $('#Uname').val();
        const pass = $('#Pass').val();

        auth.signInWithEmailAndPassword(userName, pass)
            .then((userCredential) => {
                //use if viewing from local node server
                window.location.href = '/index';

                //use if viewing from remote heroku server
                // window.location.href = 'https://team7-a6.herokuapp.com/index'
            })
            .catch((e) => alert(e));
    });
}
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 
 
function checkLoginState() {
   FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });
 }