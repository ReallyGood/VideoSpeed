console.log("Hi from video trainer!");

(function(){
    var videoEl = $('video')[0];
    var watchLaterEl = $('.html5-watch-later-button');

    if($('.html5-watch-later-button').length) {
        inject();
    } else {
        warn();
        return;
    }

    function warn(){
        console.warn("No HTML5 Player found, sorry");
    }

    function inject(){
        var speedchangeButton = watchLaterEl
            .clone()
            .attr('data-tooltip', 'Change Video Speed')
            .attr('aria-label', 'Change Video Speed')
            .removeClass('html5-watch-later-button')
            .addClass('html5-change-speed-button')
            .find('.yt-uix-button-icon-wrapper')
                .append('<strong>&times;<span class="speed">1.00</span></strong>')
                .end()
            .insertAfter(watchLaterEl);
    }

    function changeSpeed(speed){
        videoEl.playbackRate = speed;
    }

})();