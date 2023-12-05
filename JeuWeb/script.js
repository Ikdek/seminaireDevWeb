window.onload = function(){
    function myGame(){
        var round = 0;
        var displayHpPlayer1 = document.querySelector("#hpPlayer1");
        var displayHpPlayer2 = document.querySelector("#hpPlayer2");
        var displayNamePlayer1 = document.querySelector("#playerName1");
        var displayNamePlayer2 = document.querySelector("#playerName2")
        
        displayNamePlayer1.innerText = prompt("Quelle est votre nom guerrier, Joueur 1 ?");
        displayNamePlayer2.innerText = prompt("Quelle est votre nom guerrier, Joueur 2 ?");
        displayHpPlayer1.innerText = 100;
        displayHpPlayer2.innerText = 100;
    };
    
    myGame()
}

