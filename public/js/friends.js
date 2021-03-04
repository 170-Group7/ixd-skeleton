'use strict';
import {auth, db} from './firebase-init.js';
import {getConversations, getFriends} from './firebase-db.js';

var friendDiv = '<div class="list-group-item">' +
				'	<p></p>' +
				'</div>';

$(document).ready(function () {
    initializePage();
})

async function initializePage() { 
// const initializePage = async () => {
    auth.onAuthStateChanged(async (user) => {
        if(user) {
            //do things
            let friendsList = await getFriends();
            console.log(friendsList);
            //get the container
            let friendListContainer = $('#friend-list-container');
            friendsList.forEach((friend) => {
                let elToAdd = jQuery(friendDiv);
                elToAdd.find('p').text(friend);
                friendListContainer.append(elToAdd);
            });
        }
        else {
            //do other things
            window.location.href = '/login';
        }
    });
}

