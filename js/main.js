// Audio vezérlő
var audioHandler = function(audio_selector) {
    // A this lesz a függvény mutatója
    //Audio elem kiválasztása és mentése.
    this.audio = document.querySelector(audio_selector);
    
    //Lejátszás.
    this.play = function() {
        this.audio.play();
    };
    
    //Pause.
    this.pause = function() {
        this.audio.pause();
    };

}

var audio1 = new audioHandler(".audio1");
var audio2 = new audioHandler(".audio2");
