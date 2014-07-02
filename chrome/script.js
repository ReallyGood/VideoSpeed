console.log("Hi from injected script!");

window.onYouTubeIframeAPIReady = function () {
    var message = {
        type: 'onYouTubeIframeAPIReady'
    };

    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent("onYouTubeIframeAPIReady", true, true, message);
    document.dispatchEvent(evt);
};