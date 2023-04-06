$(document).ready(function(){
    var immagini = new Array("navicella1.png", "navicella2.png", "navicella3.png", "navicella4.png"); //array delle immagini
    var nomi = new Array("ORION", "SPIDER", "VENOM", "URANUS");
    var arrowRight = document.getElementById("arrowRight");
    var arrowLeft = document.getElementById("arrowLeft");
    var indiceStart = 0; //viene visualizzata navicella 1 di default

    $(arrowRight).click(function(){
        if(indiceStart < immagini.length - 1){
            indiceStart += 1;
            showDetails();
            colorArrows();
        }
        
    });

    $(arrowLeft).click(function(){
        if(indiceStart > 0){
            indiceStart -= 1;
            showDetails();
            colorArrows();
        }

    });
    
    function showDetails(){
        document.getElementById("navicellaScelta").src = "IMMAGINI/GAME/" + immagini[indiceStart];
        document.getElementById("showNameNav").innerHTML = "<p> navicella scelta: " + nomi[indiceStart] + "</p>"; 
    }

    function colorArrows(){
        if(indiceStart == immagini.length - 1)
            arrowRight.style.color = "white";
        else if(indiceStart == 0)
            arrowLeft.style.color = "white";
        else{
            arrowLeft.style.color = "LightGreen";
            arrowRight.style.color = "LightGreen";
        }
    }

});