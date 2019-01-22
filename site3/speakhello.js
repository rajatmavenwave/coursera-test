(function(window){

var hellospeaker={};

var speakWord="Hello";

hellospeaker.speak=function(name){
    hellospeaker.name=name;
    console.log(speakWord + " " + name);
}
window.hellospeaker=hellospeaker;
})(window);