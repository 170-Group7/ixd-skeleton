'use strict';

const watchInviteDiv = '<div class="watch-invite">' +
                        '    <a href="#">Watch</a>' +
                        '     <a href="#">Invite</a>' +
                        '</div>';

//CODE FOR CLICKING ON THE CELLS OF THE HOMEPAGE
$(document).ready(function () {
    console.log("Somf");
    initializePage();
} );

function initializePage() {
    setUpVideoList();
}

function setUpVideoList() {
    console.log('setUpVideoList');
    let videoListDivs = $('#videos').children();
    videoListDivs.each((index) => jQuery(videoListDivs[index]).click(videoClickHandler));
};

function videoClickHandler(el) {
    if($(this).find('.watch-invite').length > 0) {
        $(this).find('.watch-invite').toggle();
    }
    else{
        //need to add specific hrefs for each watchInviteDiv
         jQuery(el.target).after(watchInviteDiv);
    }
}