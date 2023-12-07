var allP = document.querySelector(".player");
allP.style.display = "none";

var currentPlayer;
var player1;
var player2;

class Player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.coins = 50;
        this.round = 0;
        this.defending = false;
        this.dpsRate = 1;
        this.inventory = { "Potions": 1, "Epee": 1 };
        this.elementClass = "";
    }

    static createPlayer() {
        var playerName = prompt("Entrez le nom du joueur:");
        return new Player(playerName);
    }

    randomAttack() {
        return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    }

    buyItem(item, cost) {
        if (this.coins >= cost) {
            this.coins -= cost;
            this.inventory[item] += 1;
            return true;
        }
        return false;
    }

    useItem(item, target) {
        if (this.inventory[item] > 0) {
            this.inventory[item] -= 1;
            if (item === "Potions") {
                target.heal(20);
            } else if (item === "Epee") {
                target.dpsRate = 2;
            }
            this.updateInventoryUI();
            updateUI();
            return true;
        }
        return false;
    }

    attack(target) {
        if (target.defending === false) {
            var damage = this.randomAttack() * this.dpsRate;
            target.receiveDamage(damage);
            this.addCoins(15);
        } else {
            this.addCoins(10);
        }
    }

    defend() {
        this.defending = true;
        this.addCoins(5);
    }

    receiveDamage(damage) {
        if (this.defending) {
            this.coins += 20;
            this.defending = false;
        } else {
            this.hp -= damage;
        }
        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    heal(amount) {
        this.hp += amount;
        if (this.hp > 100) {
            this.hp = 100;
        }
    }

    addCoins(amount) {
        this.coins += amount;
    }

    subtractCoins(amount) {
        if (this.coins >= amount) {
            this.coins -= amount;
        }
    }

    showInventory() {
        let previousMenu = document.getElementById("action" + (player1 === currentPlayer ? 1 : 2));
        previousMenu.style.display = "none";
        let newMenu = document.getElementById("inventoryPlayer" + (player1 === currentPlayer ? 1 : 2));
        newMenu.style.display = "flex";
    }

    switchTurn() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        currentPlayer.defending = false;
    }

    updateInventoryUI() {
        let potionsCountElement = document.getElementById(`potionsCount${currentPlayer === player1 ? 1 : 2}`);
        let epeeCountElement = document.getElementById(`epeeCount${currentPlayer === player1 ? 1 : 2}`);

        potionsCountElement.textContent = currentPlayer.inventory["Potions"];
        epeeCountElement.textContent = currentPlayer.inventory["Epee"];
    }
}

function updateUI() {
    var hpPlayer1Element = document.getElementById("hpPlayer1");
    var coinsPlayer1Element = document.getElementById("coinsPlayer1");
    var hpPlayer2Element = document.getElementById("hpPlayer2");
    var coinsPlayer2Element = document.getElementById("coinsPlayer2");

    hpPlayer1Element.textContent = player1.hp + "/100❤️";
    coinsPlayer1Element.textContent = player1.coins + "🪙";
    hpPlayer2Element.textContent = player2.hp + "/100❤️";
    coinsPlayer2Element.textContent = player2.coins + "🪙";

    var action1Element = document.getElementById("action1");
    var action2Element = document.getElementById("action2");

    if (action1Element && action2Element) {
        action1Element.style.display = currentPlayer === player1 ? "flex" : "none";
        action2Element.style.display = currentPlayer === player2 ? "flex" : "none";
    }
}

window.onload = function () {
    player1 = Player.createPlayer();
    player2 = Player.createPlayer();
    currentPlayer = player1;

    allP.style.display = "flex";

    var title = document.querySelector("#title");
    title.style.display = "none";

    var playerName1Element = document.getElementById("playerName1");
    var hpPlayer1Element = document.getElementById("hpPlayer1");
    var coinsPlayer1Element = document.getElementById("coinsPlayer1");

    var playerName2Element = document.getElementById("playerName2");
    var hpPlayer2Element = document.getElementById("hpPlayer2");
    var coinsPlayer2Element = document.getElementById("coinsPlayer2");

    playerName1Element.textContent = player1.name;
    playerName2Element.textContent = player2.name;
    updateUI();

    document.getElementById("attack1").addEventListener("click", function () {
        player1.attack(player2);
        currentPlayer.switchTurn();
        updateUI();
    });

    document.getElementById("attack2").addEventListener("click", function () {
        player2.attack(player1);
        currentPlayer.switchTurn();
        updateUI();
    });

    document.getElementById("defend1").addEventListener("click", function () {
        player1.defend();
        currentPlayer.switchTurn();
        updateUI();
    });

    document.getElementById("defend2").addEventListener("click", function () {
        player2.defend();
        currentPlayer.switchTurn();
        updateUI();
    });

    document.getElementById("items1").addEventListener("click", function () {
        player1.showInventory();
        player1.updateInventoryUI();
        var potionButtons = document.getElementsByClassName("potions");
        for (var i = 0; i < potionButtons.length; i++) {
            potionButtons[i].addEventListener("click", function () {
                player1.useItem("Potions", player2);
            });
        }

        var epeeButtons = document.getElementsByClassName("Epée");
        for (var i = 0; i < epeeButtons.length; i++) {
            epeeButtons[i].addEventListener("click", function () {
                player1.useItem("Epee", player2);
            });
        }
    });

    document.getElementById("items2").addEventListener("click", function () {
        player2.showInventory();
        player2.updateInventoryUI();
        var potionButtons = document.getElementsByClassName("potions");
        for (var i = 0; i < potionButtons.length; i++) {
            potionButtons[i].addEventListener("click", function () {
                player2.useItem("Potions", player1);
            });
        }
        var epeeButtons = document.getElementsByClassName("Epée");
        for (var i = 0; i < epeeButtons.length; i++) {
            epeeButtons[i].addEventListener("click", function () {
                player2.useItem("Epee", player1);
            });
        }
    });
};
