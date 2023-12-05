window.onload = function () {

    var displayNamePlayer1, displayNamePlayer2;
    var start, title, status;
    var hpPlayer1, hpPlayer2, displayHpPlayer1, displayHpPlayer2;
    var coinsPlayer1, coinsPlayer2, displaycoinsPlayer1, displaycoinsPlayer2;
    var round, displayRound;
    var action1, action2;
    var inv1, inv2;
    var side, shopButtons1, shopButtons2;

    var potionCost = 30;
    var bouclierCost = 50;

//  ██████╗ ██╗   ██╗███████╗██████╗ ██╗   ██╗███████╗███████╗██╗     ███████╗ ██████╗████████╗ ██████╗ ██████╗ 
// ██╔═══██╗██║   ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔════╝██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
// ██║   ██║██║   ██║█████╗  ██████╔╝ ╚████╔╝ ███████╗█████╗  ██║     █████╗  ██║        ██║   ██║   ██║██████╔╝
// ██║▄▄ ██║██║   ██║██╔══╝  ██╔══██╗  ╚██╔╝  ╚════██║██╔══╝  ██║     ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
// ╚██████╔╝╚██████╔╝███████╗██║  ██║   ██║   ███████║███████╗███████╗███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
//  ╚══▀▀═╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝

    displayNamePlayer1 = document.querySelector("#playerName1");
    displayNamePlayer2 = document.querySelector("#playerName2");

    start = document.querySelector("#start");
    title = document.querySelector("#title");
    status = document.querySelector(".player");

    hpPlayer1 = 100;
    hpPlayer2 = 100;
    displayHpPlayer1 = document.querySelector("#hpPlayer1");
    displayHpPlayer2 = document.querySelector("#hpPlayer2");

    coinsPlayer1 = 50;
    coinsPlayer2 = 50;
    displaycoinsPlayer1 = document.querySelector("#coinsPlayer1");
    displaycoinsPlayer2 = document.querySelector("#coinsPlayer2");

    round = 0;
    displayRound = document.querySelector("#round");

    action1 = document.querySelector("#action1");
    action2 = document.querySelector("#action2");

    inv1 = { ["Potions"]: 0, ["Bouclier"]: 0 };
    inv2 = { ["Potions"]: 0, ["Bouclier"]: 0 };

    side = true;
    shopButtons1 = document.querySelector("#shopButtons1");
    shopButtons2 = document.querySelector("#shopButtons2");

    shopButtons1.style.display = "none";
    shopButtons2.style.display = "none";

    // Masquer tous les éléments sauf start et title au chargement de la page
    status.style.display = "none";
    action1.style.display = "none";
    action2.style.display = "none";

    start.addEventListener("click", myGameInit);

//  █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// ███████║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                       
                                                                                                             
    var attack1Button = document.querySelector("#attack1");
    attack1Button.addEventListener("click", attackPlayer1);

    var attack2Button = document.querySelector("#attack2");
    attack2Button.addEventListener("click", attackPlayer2);

    var shopButton1 = document.querySelector("#shop1");
    shopButton1.addEventListener("click", function () {
        displayShopButtons("player1");
    });

    var shopButton2 = document.querySelector("#shop2");
    shopButton2.addEventListener("click", function () {
        displayShopButtons("player2");
    });

    var exitButton = document.querySelector("#exit");
    exitButton.addEventListener("click", function () {
        exitShopMode();
    });

    var itemsButton1 = document.querySelector("#items1");
    itemsButton1.addEventListener("click", function () {
        displayItemsMenu("player1");
    });

    var itemsButton2 = document.querySelector("#items2");
    itemsButton2.addEventListener("click", function () {
        displayItemsMenu("player2");
    });


// ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                          



    function myGameInit() {
        start.style.display = "none";
        title.style.display = "none";
        status.style.display = "flex";
        action1.style.display = "flex";
        displayRound.innerText = "round " + round;

        displayNamePlayer1.innerText = prompt("Quel est votre nom, Joueur 1 ?");
        displayNamePlayer2.innerText = prompt("Quel est votre nom, Joueur 2 ?");
        displayHpPlayer1.innerText = hpPlayer1 + " / 100❤️";
        displayHpPlayer2.innerText = hpPlayer2 + " / 100❤️";
        displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
        displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
        myRounds();
    }

    function myRounds() {
        if (side === true) {
            action2.style.display = "none";
            action1.style.display = "flex";
        } else {
            action1.style.display = "none";
            action2.style.display = "flex";
            round += 1;
            displayRound.innerText = "round " + round;
        }
    }

    function attackPlayer1() {
        if (side === true) {
            hpPlayer2 -= 20;
            displayHpPlayer2.innerText = hpPlayer2 + " / 100❤️";
            side = false;
            coinsPlayer1 += 20;
            displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
            myRounds();
        }
    }

    function attackPlayer2() {
        if (side === false) {
            hpPlayer1 -= 20;
            displayHpPlayer1.innerText = hpPlayer1 + " / 100❤️";
            side = true;
            coinsPlayer2 += 20;
            displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
            myRounds();
        }
    }

    function displayShopButtons(player) {
        var actionContainer = document.querySelector("#action" + (player === "player1" ? "1" : "2"));
        var shopButtons = document.querySelector("#shopButtons" + (player === "player1" ? "1" : "2"));

        if (actionContainer && shopButtons) {
            actionContainer.style.display = "none";
            shopButtons.style.display = "flex";
            var potionButton = document.querySelector("#potions" + (player === "player1" ? "1" : "2"));
            var bouclierButton = document.querySelector("#bouclier" + (player === "player1" ? "1" : "2"));

            if (potionButton && bouclierButton) {
                potionButton.addEventListener("click", function () {
                    buyItem(player, "potion");
                });

                bouclierButton.addEventListener("click", function () {
                    buyItem(player, "bouclier");
                });
            }
        }
    }

    function buyItem(player, item) {
        var currentPlayerCoins = (player === "player1" ? coinsPlayer1 : coinsPlayer2);

        if (currentPlayerCoins >= potionCost && item === "potion") {
            if (player === "player1") {
                coinsPlayer1 -= potionCost;
                displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
                inv1["Potions"] += 1;
                document.getElementById("potions1Count").innerText = inv1["Potions"];
            } else {
                coinsPlayer2 -= potionCost;
                displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
                inv2["Potions"] += 1;
                document.getElementById("potions2Count").innerText = inv2["Potions"];
            }

            console.log("Potion achetée!");
        } else if (currentPlayerCoins >= bouclierCost && item === "bouclier") {
            if (player === "player1") {
                coinsPlayer1 -= bouclierCost;
                displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
                inv1["Bouclier"] += 1;
                document.getElementById("bouclier1Count").innerText = inv1["Bouclier"];
            } else {
                coinsPlayer2 -= bouclierCost;
                displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
                inv2["Bouclier"] += 1;
                document.getElementById("bouclier2Count").innerText = inv2["Bouclier"];
            }

            console.log("Bouclier acheté!");
        } else {
            console.log("Pas assez de pièces de monnaie.");
        }

        exitShopMode();
    }

    function exitShopMode() {
        action1.style.display = (side ? "flex" : "none");
        action2.style.display = (!side ? "flex" : "none");
        shopButtons1.style.display = "none";
        shopButtons2.style.display = "none";
        document.getElementById("inventoryPlayer1").style.display = "none";
        document.getElementById("inventoryPlayer2").style.display = "none";
    }

    function displayItemsMenu(player) {
        var inventory = document.getElementById("inventory" + player);
        var itemButtons = document.getElementsByClassName("itemButton");

        if (inventory && itemButtons.length > 0) {
            shopButtons1.style.display = "none";
            shopButtons2.style.display = "none";
            inventory.style.display = "flex";

            for (var i = 0; i < itemButtons.length; i++) {
                itemButtons[i].style.display = "block";
            }
        }
    }
};
