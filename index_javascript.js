$(document).ready(function(){

    var x;
    var y;

    //card 1 e card 2
    /*$(document).mousemove(function(event){
        x = event.pageX + "px";
        y = event.pageY + "px";
    });

    $(".card").mouseover(function(event){
        $("#cursore").css("width", "50px").css("height", "50px").css("position", "relative").css("top", y).css("left", x);
        $("#cursore").css("background-color", "red")
    });

    $(".card").mouseout(function(event){
        $(event.target).css("background", "transparent");
    });
*/



    //prompt dei comandi 
    var imgTitolo = $("div#menu-prompt img");

    $(imgTitolo).mouseover(function(){
        $(imgTitolo).css("cursor", "pointer");

    });

    var input = $("#input-start");
    var loading = document.createElement("div");
    var btnStart = document.createElement("button");
    var cont = 0, time;

    window.onkeydown = startProcess;


    function startProcess(event){
        var temp = input.val().toLowerCase();
        
        switch(event.keyCode){
            case 13:{
                if(abilitaComando(temp, "start", "game")){
                    loading.style.marginTop = "15px";
                    btnStart.style.marginTop = "25px";
                    
                    time = window.setInterval(startLoadingGame, 1000);
                }
                    
                else if(abilitaComando(temp, "rule", ""))
                    alert("rules");
            }
        }

    }

    function abilitaComando(stringaPrincipale, stringa1, stringa2){
        if(stringaPrincipale.indexOf(stringa1) != -1 && stringaPrincipale.indexOf(stringa2) != -1) //cerca stringa1 e restituisce un intero
            return true;
        return false;                
    }

    function startLoadingGame(){
        if(cont == 10){
            clearInterval(time);

            //definisco il bottone per avviare il game
            loading.appendChild(btnStart);
            btnStart.style.width = "150px";
            btnStart.innerHTML = "<a href='gioco.html' target='_blank'> avvia </a> ";
        }
            
        else{
            document.getElementById("mainContainer").appendChild(loading);
            temp(loading);
        }
    }

    function temp(loading){
        var quadratino = document.createElement("div"); //creo il quadratino
        quadratino = styleCssQuadratino(quadratino);
        loading.appendChild(quadratino); //lo metto come figlio del div LOADING

        cont = cont+1; //aumento i contatore dei quadratini stampati
    }

    function styleCssQuadratino(quadratino){ //modifico il CSS di ogni singolo quadrato
        quadratino.style.width = "15px";
        quadratino.style.height = "15px";
        quadratino.style.backgroundColor = "green";
        quadratino.style.float = "left";
        quadratino.style.marginLeft = "5px";

        return quadratino;
    }

});
