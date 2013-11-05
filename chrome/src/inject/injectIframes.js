(function(){

    var videoEl = $('video')[0];
    var watchLaterEl = $('.html5-watch-later-button');
    var speedInput, speedValue;

    inject();

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

        if(location.search.indexOf('youtubecom=1') > -1) {
            $('body').addClass('youtubecom');
        }
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