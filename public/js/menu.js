'use strict';
import {auth} from './firebase-init.js';

$(document).ready(function () {
    initializePage();
});

function initializePage() {
    auth.onAuthStateChanged((user) => {
        if(user) {
            //set up buttons
            setUpSignOut();
        }
        else {
            window.location.href = '/login';
        }
    })
}

function setUpSignOut() {
    $('#sign-out').click(() => {
        auth.signOut()
            .then(() => {
                //dont have to do anything
            })
            .catch((e) => alert(e))
    });
}