// Audio vezérlő függyvény javascript-el, így is lehet deklarálni a függvényt
var audioHandler = function(div) {
    
    // A this lesz a függvény mutatója
    //Audio elem kiválasztása és mentése.
    //HTML5-ben létezik már osztály, de minden böngésző támogatja.
    //Itt a function egy osztály ez az audioHandler, egy osztályváltozó az this.audio
    // áés egy metódusa, tagfüggvénye a this.play.
    this.div = div;
    this.playBtn = div.querySelector(".play")
    this.muteBtn = div.querySelector(".mute")
    this.audio = div.querySelector("audio");
    
    
    //Constructor
    this.construct = function () {
        
        //Lejátszógomb
        this.playBtn.addEventListener("click", function() { 
            this.parentNode.handler.togglePlay();
        }, false);
        
        //Pause gomb
        this.muteBtn.addEventListener("click", function() { 
            this.parentNode.handler.toggleMute();
        }, false);
        
    };
    
    
    //Lejátszás a függvényen belüli függvénnyel(tagfüggvény).
    //a this.play egy függvény definíció
    this.play = function() {
        this.audio.play();
    };
    
    
    //Lejátszás gomb váltása
    this.togglePlay = function() {
        if ( this.audio.paused ) {
            this.play();
            this.div.classList.add( "played" );
        } else {
            this.pause();
            this.div.classList.remove( "played" );            
        }   
    };
    
    
    //Pause.
    this.pause = function() {
        this.audio.pause();
    };
    
    //Némítás
    this.mute = function() {
        this.audio.muted = true;
    };
    
    //Némítás váltása, használtuk a ! (negálás)logikai operátort
    this.toggleMute = function () {
        this.audio.muted = !this.audio.muted;
        if ( this.audio.muted ) {
            this.div.classList.add( "muted" );
        } else {
            this.div.classList.remove( "muted" );
        }
    };
    
    //Összes némítása.
    this.muteAll = function () {
        //összes audio elem kiválasztása
        var allAudio = document.querySelectorAll("audio");
        //egyenként végigjárjuk az összes elemet és elnémítjuk
        Array.prototype.forEach.call(allAudio, function(item) {
            item.muted = true;
        });
    };
    
    //Léptetés
    this.setTime = function(cTime) {
        //Paraméter vizsgálata
        cTime = parseInt(cTime, 10);
        //Ha nem tudja számmá alakítani NaN -lesz. isNaN-al viszgálom
        if (isNaN(cTime)) {
            console.error("A megadott értéknek számnak kell lennie!");
            return;
        }
        
        //Megvizsgáljuk, hogy az audio file hosszánál ne legyen nagyobb acTime
        //Ha nagyobb a file végére lépünk. Használjuk ?-jel feltételes 3 operandusos
        cTime = cTime < this.audio.duration ? cTime : this.audio.duration;   
        
        //A pillanatnyi lejátszási hely beállítása.
        this.audio.currentTime = cTime;
    };

    this.construct();
};

    
var audioDivs = document.querySelectorAll(".audio-handler-div");

Array.prototype.forEach.call(audioDivs, function(item) {
    item.handler = new audioHandler(item);
} );


//Példányosítás
// var audio1 = new audioHandler(".audio1");
// var audio2 = new audioHandler(".audio2");

















