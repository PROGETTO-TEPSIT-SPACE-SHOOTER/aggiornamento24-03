$(document).ready(function(){

    //prompt dei comandi 
    var imgTitolo = $("div#menu-prompt img");

    $(imgTitolo).mouseover(function(){
        $(imgTitolo).css("cursor", "pointer");

    });

    var input = $("#input-start");
    var loading = document.createElement("div");
    var btnStart = document.createElement("button");
    var avvisoLoading = document.createElement("p");
    avvisoLoading.innerHTML = "Loading...";
    var cont = 0, time;

    window.onkeydown = startProcess;


    function startProcess(event){
        var temp = input.val().toLowerCase();
        
        switch(event.keyCode){
            case 13:{
                if(abilitaComando(temp, "start", "game")){
                    styleCssLoading();
                    styleCssAvvisoLoading();
                    
                    time = window.setInterval(startLoadingGame, 1000);
                }
                    
                else if(abilitaComando(temp, "rule", ""))
                    alert("rules");

                else{
                    confirm("Per avviare le regole scrivere 'rule', per il gioco digitare una stringa qualsiasi. L'importante è che contenga le parole 'game' e 'start'. L'ordine sceglilo tu :)");
                }

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
            document.getElementById("mainContainer").appendChild(btnStart);
            btnStart.innerHTML =
            "<a href='gamePage.html' target='_blank'> <img src='IMMAGINI/INDEX/sticker_playGame.png' style='width: 20px'> <span> play </span> </a> ";
        }
            
        else{
            if(cont == 0)
                document.getElementById("mainContainer").appendChild(avvisoLoading);
            document.getElementById("mainContainer").appendChild(loading);
            incrementaQuadratini(loading);
        }
    }

    function incrementaQuadratini(loading){
        var quadratino = document.createElement("div"); //creo il quadratino
        quadratino = styleCssQuadratino(quadratino);
        loading.appendChild(quadratino); //lo metto come figlio del div LOADING

        cont = cont+1; //aumento i contatore dei quadratini stampati
    }

    //DA METTERE CON JQuery
    function styleCssQuadratino(quadratino){ //modifico il CSS di ogni singolo quadrato
        quadratino.style.width = "15px";
        quadratino.style.height = "15px";
        quadratino.style.backgroundColor = "green";
        quadratino.style.float = "left";
        quadratino.style.marginLeft = "5px";
        quadratino.style.marginTop = "5px";
        quadratino.style.marginBottom = "5px";

        return quadratino;
    }

    function styleCssLoading(){
        loading.style.width = "205px";
        loading.style.height = "25px";
        loading.style.marginTop = "30px";
        loading.style.border = "2px solid green";
        loading.style.borderRadius = "10px";
        loading.style.marginLeft = "37.5%";
    }

    function styleCssAvvisoLoading(){
        $(avvisoLoading).css("width", "80px").css("position", "relative").css("left", "46%").css("top", "100px");
    }

});
