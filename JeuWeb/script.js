window.onload = function () {


    // ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗ 
    // ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝ 
    // ██║  ██║█████╗  ██████╔╝██║   ██║██║  ███╗
    // ██║  ██║██╔══╝  ██╔══██╗██║   ██║██║   ██║
    // ██████╔╝███████╗██████╔╝╚██████╔╝╚██████╔╝
    // ╚═════╝ ╚══════╝╚═════╝  ╚═════╝  ╚═════╝ 

    var shopButton1ClickListener = function () {
        displayShopButtons("player1");
    };

    var shopButton2ClickListener = function () {
        displayShopButtons("player2");
    };

    var exitButtonClickListener = function () {
        exitShopMode();
    };

    var displayNamePlayer1, displayNamePlayer2;
    var start, title, status;
    var hpPlayer1, hpPlayer2, displayHpPlayer1, displayHpPlayer2;
    var coinsPlayer1, coinsPlayer2, displaycoinsPlayer1, displaycoinsPlayer2;
    var round, displayRound;
    var action1, action2;
    var inv1, inv2;
    var side, shopButtons1, shopButtons2;
    var player1Def, player2Def;
    var playerDpsRate1 = 1;
    var playerDpsRate2 = 1;
    var potionCost = 30;
    var epeeCost = 50;

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

    inv1 = { "Potions": 1, "Epee": 1 };
    inv2 = { "Potions": 1, "Epee": 1 };


    side = true;
    shopButtons1 = document.querySelector("#shopButtons1");
    shopButtons2 = document.querySelector("#shopButtons2");

    shopButtons1.style.display = "none";
    shopButtons2.style.display = "none";

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
    var model1 = document.getElementById("player1Model");
    var model2 = document.getElementById("player2Model");

    var attack1Button = document.querySelector("#attack1");
    attack1Button.addEventListener("click", attackPlayer1);

    var attack2Button = document.querySelector("#attack2");
    attack2Button.addEventListener("click", attackPlayer2);

    var defend1Button = document.querySelector("#defend1");
    defend1Button.addEventListener("click", defendPlayer1);

    var defend2Button = document.querySelector("#defend2");
    defend2Button.addEventListener("click", defendPlayer2);

    var shopButton1 = document.querySelector("#shop1");
    shopButton1.addEventListener("click", function () {
        displayShopButtons("player1");
    });

    var shopButton2 = document.querySelector("#shop2");
    shopButton2.addEventListener("click", function () {
        displayShopButtons("player2");
    });


    var itemButton1 = document.querySelector("#items1");
    itemButton1.addEventListener("click", function () {
        displayItemsButtons("player1");
    });

    var itemButton2 = document.querySelector("#items2");
    itemButton2.addEventListener("click", function () {
        displayItemsButtons("player2");
    });

    var exitButton = document.querySelector(".exitShop1");
    exitButton.addEventListener("click", function () {
        exitShopMode();
    });
    var exitButton = document.querySelector(".exitShop2");
    exitButton.addEventListener("click", function () {
        exitShopMode();
    });
    var exitItems = document.querySelector(".exitItems1");
    exitItems.addEventListener("click", function () {
        exitShopMode();
    });
    var exitItems = document.querySelector(".exitItems2");
    exitItems.addEventListener("click", function () {
        exitShopMode();
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


    function randomAtt() {
        return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    }


    function myRounds() {
        if (side === true) {
            action2.style.display = "none";
            action1.style.display = "flex";
            player1Def = false;
            playerDpsRate2 = 1;
            model2.classList.remove("hited")
            model2.classList.remove("hitedShield")
            model2.classList.remove("drinked")
            model2.classList.remove("shielded")
        } else {
            action1.style.display = "none";
            action2.style.display = "flex";
            round += 1;
            displayRound.innerText = "round " + round;
            player2Def = false;
            playerDpsRate1 = 1;
            model1.classList.remove("hited")
            model1.classList.remove("hitedShield")
            model1.classList.remove("drinked")
            model1.classList.remove("shielded")
        }
    }

    function updateButtonsDisplay(player) {
        var actionContainer = document.querySelector("#action" + (player === "player1" ? "1" : "2"));
        var inventory = document.querySelector("#inventoryPlayer" + (player === "player1" ? "1" : "2"));

        if (actionContainer && inventory) {
            if (player === "player1") {
                action1.style.display = "flex";
            } else {
                action2.style.display = "flex";
            }
            inventory.style.display = "none";
        }
    }

    function removeShopEventListeners() {
        shopButton1.removeEventListener("click", shopButton1ClickListener);
        shopButton2.removeEventListener("click", shopButton2ClickListener);
        exitButton.removeEventListener("click", exitButtonClickListener);
    }

    function attackPlayer1() {
        if (side === true) {
            if (player2Def == true) {
                side = false;
                coinsPlayer1 += 20;
                displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
                model2.classList.add("hitedShield")
                myRounds();
            } else {
                hpPlayer2 -= randomAtt() * playerDpsRate1;
                displayHpPlayer2.innerText = hpPlayer2 + " / 100❤️";
                side = false;
                model2.classList.add("hited")
                coinsPlayer1 += 10;
                displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
                checkGameOver();
            }

        }
    }

    function attackPlayer2() {
        if (side === false) {
            if (player1Def == true) {
                side = true;
                coinsPlayer2 += 20;
                displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
                model1.classList.add("hitedShield")
                myRounds();
            } else {
                hpPlayer1 -= randomAtt() * playerDpsRate2;
                displayHpPlayer1.innerText = hpPlayer1 + " / 100❤️";
                side = true;
                model1.classList.add("hited")
                coinsPlayer2 += 10;
                displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
                checkGameOver();
            }

        }
    }

    function defendPlayer1() {
        if (side === true) {
            player1Def = true;
            coinsPlayer1 += 10;
            displaycoinsPlayer1.innerText = coinsPlayer1 + "🪙";
            side = false;
            model1.classList.add("hitedShield")
            myRounds();
        }
    }

    function defendPlayer2() {
        if (side === false) {
            player2Def = true;
            coinsPlayer2 += 10;
            displaycoinsPlayer2.innerText = coinsPlayer2 + "🪙";
            side = true;
            model2.classList.add("hitedShield")
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
            var epeeButton = document.querySelector("#epee" + (player === "player1" ? "1" : "2"));

            if (potionButton && epeeButton) {
                potionButton.addEventListener("click", function () {
                    buyItem(player, "Potions");
                });

                epeeButton.addEventListener("click", function () {
                    buyItem(player, "Epee");
                });
            }
        }
    }

    function buyItem(player, item) {
        var currentPlayerCoins = (player === "player1" ? coinsPlayer1 : coinsPlayer2);
        var inventory = (player === "player1" ? inv1 : inv2);
        if (currentPlayerCoins >= potionCost && item === "Potions") {
            currentPlayerCoins -= potionCost;
            if (player === "player1") {
                displaycoinsPlayer1.innerText = currentPlayerCoins + "🪙";
            } else {
                displaycoinsPlayer2.innerText = currentPlayerCoins + "🪙";
            }
            inventory["Potions"] = inventory["Potions"] + 1;
        } else if (currentPlayerCoins >= epeeCost && item === "Epee") {
            currentPlayerCoins -= epeeCost;
            if (player === "player1") {
                displaycoinsPlayer1.innerText = currentPlayerCoins + "🪙";
            } else {
                displaycoinsPlayer2.innerText = currentPlayerCoins + "🪙";
            }
            inventory["Epee"] = inventory["Epee"] + 1;
        } else {
            alert("Pas assez de pièces de monnaie.");
        }

        exitShopMode();
    }


    function exitShopMode() {
        removeShopEventListeners();

        action1.style.display = (side ? "flex" : "none");
        action2.style.display = (!side ? "flex" : "none");
        shopButtons1.style.display = "none";
        shopButtons2.style.display = "none";
        document.getElementById("inventoryPlayer1").style.display = "none";
        document.getElementById("inventoryPlayer2").style.display = "none";
    }

    function displayItemsButtons(player) {
        var actionContainer = document.querySelector("#action" + (player === "player1" ? "1" : "2"));
        var inventory = document.querySelector("#inventoryPlayer" + (player === "player1" ? "1" : "2"));

        if (actionContainer && inventory) {
            actionContainer.style.display = "none";
            inventory.style.display = "flex";
            var potionButton = document.querySelector("#potionsButton" + (player === "player1" ? "1" : "2"));
            var epeeButton = document.querySelector("#epeeButton" + (player === "player1" ? "1" : "2"));
            if (player == "player1") {
                potionButton.innerText = `Potions : ${inv1["Potions"]}`
                epeeButton.innerText = `Epée : ${inv1["Epee"]}`
            } else {
                potionButton.innerText = `Potions : ${inv2["Potions"]}`
                epeeButton.innerText = `Epée : ${inv2["Epee"]}`
            }

            if (potionButton && epeeButton) {
                potionButton.addEventListener("click", function () {
                    useItem(player, "potion");
                });

                epeeButton.addEventListener("click", function () {
                    useItem(player, "epee");
                });
            }
        }
    }

    function useItem(player, item) {
        if (item === "epee") {
            if (player === "player1") {
                if (inv1["Epee"] > 0) {
                    playerDpsRate1 = 2;
                    inv1["Epee"] -= 1;
                    model1.classList.add("shielded")
                }
            } else {
                if (inv2["Epee"] > 0) {
                    playerDpsRate2 = 2;
                    inv2["Epee"] -= 1;
                    model2.classList.add("shielded")
                }
            }
        } else if (item == "potion") {
            if (player === "player1") {
                if (inv1["Potions"] > 0) {
                    if (hpPlayer1 <= 80) {
                        hpPlayer1 += 20;
                        displayHpPlayer1.innerText = hpPlayer1 + " / 100❤️";
                        inv1["Potions"] -= 1;
                    } else {
                        hpPlayer1 = 100;
                        displayHpPlayer1.innerText = hpPlayer1 + " / 100❤️";
                        inv1["Potions"] -= 1;
                    }
                    model1.classList.add("drinked")
                }
            } else {
                if (inv2["Potions"] > 0) {
                    if (hpPlayer2 <= 80) {
                        hpPlayer2 += 20;
                        displayHpPlayer2.innerText = hpPlayer1 + " / 100❤️";
                        inv2["Potions"] -= 1;
                    } else {
                        hpPlayer2 = 100;
                        displayHpPlayer2.innerText = hpPlayer2 + " / 100❤️";
                        inv2["Potions"] -= 1;
                    }
                    model2.classList.add("drinked")
                }

            }
        }
        updateButtonsDisplay(player);
    }
    function checkGameOver() {
        if (hpPlayer1 <= 0 || hpPlayer2 <= 0) {
            endGame();
        } else {
            myRounds();
        }
    }

    function endGame() {
        var deathMessage = document.querySelector("#deadTitle");

        if (hpPlayer1 <= 0 && hpPlayer2 <= 0) {
            deathMessage.innerText = "Match nul !";
        } else if (hpPlayer1 <= 0) {
            deathMessage.innerText = `${displayNamePlayer1.innerText} est mort ...`;
        } else {
            deathMessage.innerText = `${displayNamePlayer2.innerText} est mort ...`;
        }

        status.style.display = "none";
        deathMessage.style.display = "block";
    }
};
