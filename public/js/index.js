'use strict';

const watchInviteDiv = '<div class="watch-invite">' +
                        '   <a href="#">Watch</a>' + 
                        '   <a href="#">Invite</a>' + 
                        '</div>';

$(document).ready(function () {
    initializePage();
});

function initializePage() {
    setUpVideos();
}

function setUpVideos() {
    let videoListDivs = $('.video-box').children();
    console.log(videoListDivs);
    videoListDivs.each((index) => jQuery(videoListDivs[index]).click(videoClickHandler));
}

function videoClickHandler(el) {
    console.log("clicked something");
    $(this).find('.watch-invite').toggle();
    /*if($(this).find('.watch-invite').length > 0) {
        $(this).find('.watch-invite').toggle();
    }
    else {
        jQuery(el.Target).after(watchInviteDiv);
    }*/
}