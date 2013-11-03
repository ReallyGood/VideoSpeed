(function(){

    var videoId = $('[itemprop="videoId"]').attr('content');
    var videoEl = $('video')[0];
    var watchLaterEl = $('.html5-watch-later-button');
    var speedInput, speedValue;
    replacePlayer();

    if($('.html5-watch-later-button').length) {
        //inject();
    } else {
        warn();
        return;
    }

    function warn(){
        console.warn("No HTML5 Player found, sorry");
    }

    function replacePlayer(){
        var embeddedPlayer = $('<iframe class="embedded-player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&amp;html5=1" allowfullscreen=""></iframe>');
        $('#player-api').append(embeddedPlayer);
    }

    function inject(){
        speedInput = $('<input type="range" class="speed" value="1.0" min="0.5" max="1.5" step="0.1">');
        speedValue = $('<strong>Speed: &times;<span class="current-speed">1.0</span></strong>');
        var speedchangeButton = watchLaterEl
            .clone()
            .attr('data-tooltip', 'Change Video Speed')
            .attr('aria-label', 'Change Video Speed')
            .removeClass('html5-watch-later-button')
            .addClass('html5-change-speed-button')
            .find('.yt-uix-button-icon-wrapper')
                .append(speedValue)
                .append(speedInput)
                .end()
            .insertAfter(watchLaterEl);
        speedInput.on('change', onSpeedChange);
    }

    function changeSpeed(speed){
        videoEl.playbackRate = speed;
    }

    function onSpeedChange(ev){
        var speed = +ev.target.value;
        changeSpeed(speed);
        speedValue.find('.current-speed').text( speed.toFixed(1) );
    }

})();