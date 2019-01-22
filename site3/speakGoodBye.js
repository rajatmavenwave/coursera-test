(function(window){

    var goodbyespeaker={};
    
    var speakWord="good bye";
    
   goodbyespeaker.speak= function (name){
       goodbyespeaker.name=name;
        console.log(speakWord + " " + name);
    }
    window.goodbyespeaker=goodbyespeaker;
    })(window);