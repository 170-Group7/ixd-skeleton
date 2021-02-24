'use strict';

//CODE FOR CLICKING ON THE CELLS OF THE HOMEPAGE
$(document).ready(function () {
    initializePage();
} );

function initializePage() {
    //code here
    setUpLogInButton();
}

function setUpLogInButton() {
    $('#log').click(() => {
        console.log("Log in button clicked");
        window.location.href = "localhost:3000/"; 
    });
}

/*
    console.log('setUpVideoList');
    let videoListDivs = $('#videos').children();
    videoListDivs.each((index) => jQuery(videoListDivs[index]).click(videoClickHandler));
function videoClickHandler(el) {
    if($(this).find('.watch-invite').length > 0) {
        $(this).find('.watch-invite').toggle();
    else{
         jQuery(el.target).after(watchInviteDiv);
         */