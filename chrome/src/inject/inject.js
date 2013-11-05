(function(){

    var videoId = $('[itemprop="videoId"]').attr('content');
    replacePlayer();

    function replacePlayer(){
        var embeddedPlayer = $('<iframe class="embedded-player" src="//www.youtube.com/embed/' + videoId + '?autoplay=1&amp;html5=1&youtubecom=1" allowfullscreen=""></iframe>');
        $('#player-api').append(embeddedPlayer);
        console.log("Replaced player");
    }

})();