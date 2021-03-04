'use strict';
import {auth} from './firebase-init.js';

$(document).ready(function () {
    initializePage();
});

function initializePage() {
    auth.onAuthStateChanged((user) => {
        if(user) {
            let atIndex = user.email.indexOf('@');
            let name = user.email.slice(0, atIndex);
            fillName(name);
        }
        else {
            window.location.href = '/login';
        }
    })
}

function fillName(name) {
    let text = $('#greeting').text();
    $('#greeting').text(`${text} ${name}`);
}