(function(){

    var videoId = $('[itemprop="videoId"]').attr('content');

    if( $('.html5-watch-later-button').length ) {
      initHere();
    } else {
      replacePlayer();
    }

    function initHere(){
        console.log('Initializing custom controls on the parent frame');
        var injectionsContainer = $('<div>');

        $('<link>').attr('href', chrome.extension.getURL('/src/inject/injectIframes.css')).attr('rel', 'stylesheet').appendTo(injectionsContainer);
        $('<script>').attr('src', chrome.extension.getURL('/js/lib/jquery.js') ).appendTo(injectionsContainer);
        $('<script>').attr('src', chrome.extension.getURL('/src/inject/injectIframes.js') ).appendTo(injectionsContainer);

        injectionsContainer.appendTo('body');
    }

    function replacePlayer(){
        console.log('Replacing YouTube Flash player with an embedded HTML5 player');
        var embeddedPlayer = $('<iframe class="embedded-player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&amp;html5=1&youtubecom=1" allowfullscreen=""></iframe>');
        $('#player-api').append(embeddedPlayer);
    }

})();