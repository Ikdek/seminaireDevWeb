const allPlayers = document.querySelector(".player");
allPlayers.style.display = "none";

let currentPlayer;
let player1;
let player2;

class Player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.coins = 50;
        this.round = 0;
        this.defending = false;
        this.dpsRate = 1;
        this.inventory = { "Potions": 1, "Epee": 1 };
    }

    static createPlayer() {
        const playerName = prompt("Entrez le nom du joueur:");
        return new Player(playerName);
    }

    randomAttack() {
        return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    }

    buyItem(item, cost) {
        if (this.coins >= cost) {
            this.coins -= cost;
            this.inventory[item] += 1;
            updateUI();
            return true;
        }
        return false;
    }

    useItem(item, target) {
        if (this.inventory[item] > 0) {
            this.inventory[item] -= 1;
            if (item === "Potions") {
                target.heal(20);
            }
            this.updateInventoryUI();
            updateUI();
            return true;
        }
        return false;
    }

    attack(target) {
        if (target.defending) {
            target.defending = false;
        } else {
            const damage = this.randomAttack() * this.dpsRate;
            target.receiveDamage(damage);
            this.addCoins(10);
        }
        this.checkEndGame();
    }

    receiveDamage(damage) {
        if (!this.defending) {
            this.hp -= damage;
            if (this.hp < 0) {
                this.hp = 0;
            }
        } else {
            this.coins += 20;
            this.defending = false;
        }
        this.checkEndGame();
    }

    defend() {
        this.defending = true;
        this.addCoins(5);
        updateUI();
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
        const previousMenu = document.getElementById("action" + (player1 === currentPlayer ? 1 : 2));
        previousMenu.style.display = "none";
        const newMenu = document.getElementById("inventoryPlayer" + (player1 === currentPlayer ? 1 : 2));
        newMenu.style.display = "flex";
    }

    switchTurn() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        switchShopDisplay(currentPlayer);
        if (currentPlayer.dpsRate > 1) {
            currentPlayer.dpsRate = 1;
        }
        setTimeout(() => {
            resetAnimations();
            switchShopDisplay()
        }, 1000);
    }

    updateInventoryUI() {
        const potionsCountElement = document.getElementById(`potionsCount${currentPlayer === player1 ? 1 : 2}`);
        const epeeCountElement = document.getElementById(`epeeCount${currentPlayer === player1 ? 1 : 2}`);
        potionsCountElement.textContent = currentPlayer.inventory["Potions"];
        epeeCountElement.textContent = currentPlayer.inventory["Epee"];
    }

    checkEndGame() {
        if (this.hp <= 0) {
            allPlayers.style.display = "none";
            document.getElementById("popupTitle").textContent = `${this.name} a succombé !`;
            document.getElementById("popup").style.display = "flex";
        }
    }
}

function switchShopDisplay() {
    if (currentPlayer === player1) {
        document.getElementById('shop1').style.display = 'block';
        document.getElementById('shop2').style.display = 'none';
    } else {
        document.getElementById('shop1').style.display = 'none';
        document.getElementById('shop2').style.display = 'block';
    }
}

function resetAnimations() {
    const models = [document.getElementById("playerModel1"), document.getElementById("playerModel2")];
    models.forEach(model => {
        if (model) {
            model.classList.remove("hit1", "hit2", "shake", "hitedShield", "drinked", "shielded");
        }
    });
}

function updateUI() {
    const hpPlayer1Element = document.getElementById("hpPlayer1");
    const coinsPlayer1Element = document.getElementById("coinsPlayer1");
    const hpPlayer2Element = document.getElementById("hpPlayer2");
    const coinsPlayer2Element = document.getElementById("coinsPlayer2");

    hpPlayer1Element.textContent = `${player1.hp}/100❤️`;
    coinsPlayer1Element.textContent = `${player1.coins}🪙`;
    hpPlayer2Element.textContent = `${player2.hp}/100❤️`;
    coinsPlayer2Element.textContent = `${player2.coins}🪙`;

    const action1Element = document.getElementById("action1");
    const action2Element = document.getElementById("action2");

    const inventoryPlayer1 = document.getElementById("inventoryPlayer1");
    const inventoryPlayer2 = document.getElementById("inventoryPlayer2");
    inventoryPlayer1.style.display = "none";
    inventoryPlayer2.style.display = "none";

    if (action1Element && action2Element) {
        action1Element.style.display = currentPlayer === player1 ? "flex" : "none";
        action2Element.style.display = currentPlayer === player2 ? "flex" : "none";
    }
}

window.onload = function () {
    player1 = Player.createPlayer();
    player2 = Player.createPlayer();
    currentPlayer = player1;

    allPlayers.style.display = "flex";
    const title = document.querySelector("#title");
    title.style.display = "none";
    const playerName1Element = document.getElementById("playerName1");
    const playerName2Element = document.getElementById("playerName2");

    playerName1Element.textContent = player1.name;
    playerName2Element.textContent = player2.name;
    updateUI();
    resetAnimations();
    switchShopDisplay();

    document.getElementById("attack1").addEventListener("click", function () {
        currentPlayer.switchTurn();
        document.getElementById("playerModel1").classList.add("hit1");

        if (player2.defending === false) {
            document.getElementById("playerModel2").classList.add("shake");
        } else {
            document.getElementById("playerModel2").classList.add("hitedShield");
        }
        player1.attack(player2);
        updateUI();
    });

    document.getElementById("attack2").addEventListener("click", function () {
        currentPlayer.switchTurn();
        document.getElementById("playerModel2").classList.add("hit2");

        if (player1.defending === false) {
            document.getElementById("playerModel1").classList.add("shake");
        } else {
            document.getElementById("playerModel1").classList.add("hitedShield");
        }
        player2.attack(player1);
        updateUI();
    });

    document.getElementById("defend1").addEventListener("click", function () {
        currentPlayer.switchTurn();
        updateUI();
        document.getElementById("playerModel1").classList.add("shielded");
        player1.defend();
    });

    document.getElementById("defend2").addEventListener("click", function () {
        currentPlayer.switchTurn();
        updateUI();
        document.getElementById("playerModel2").classList.add("shielded");
        player2.defend();
    });

    document.getElementById("items1").addEventListener("click", function () {
        player1.showInventory();
        player1.updateInventoryUI();
        const potionButtons = document.getElementsByClassName("potions");
        for (let i = 0; i < potionButtons.length; i++) {
            potionButtons[i].addEventListener("click", function () {
                player1.useItem("Potions", player1);
                document.getElementById("playerModel1").classList.add("drinked");
                setTimeout(() => {
                    document.getElementById("playerModel1").classList.remove("drinked");
                }, 500);
            });
        }

        const epeeButtons = document.getElementsByClassName("Epée");
        for (let i = 0; i < epeeButtons.length; i++) {
            epeeButtons[i].addEventListener("click", function () {
                player1.useItem("Epee", player1);
                document.getElementById("playerModel1").classList.add("shielded");
                setTimeout(() => {
                    document.getElementById("playerModel1").classList.remove("shielded");
                }, 500);
            });
        }
    });

    document.getElementById("items2").addEventListener("click", function () {
        player2.showInventory();
        player2.updateInventoryUI();
        const potionButtons = document.getElementsByClassName("potions");
        for (let i = 0; i < potionButtons.length; i++) {
            potionButtons[i].addEventListener("click", function () {
                player2.useItem("Potions", player2);
                document.getElementById("playerModel2").classList.add("drinked");
                setTimeout(() => {
                    document.getElementById("playerModel2").classList.remove("drinked");
                }, 500);
            });
        }

        const epeeButtons = document.getElementsByClassName("Epée");
        for (let i = 0; i < epeeButtons.length; i++) {
            epeeButtons[i].addEventListener("click", function () {
                player2.useItem("Epee", player2);
                document.getElementById("playerModel2").classList.add("shielded");
                setTimeout(() => {
                    document.getElementById("playerModel2").classList.remove("shielded");
                }, 500);
            });
        }
    });

    document.getElementById("exitItems1").addEventListener("click", function () {
        updateUI();
    });

    document.getElementById("exitItems2").addEventListener("click", function () {
        updateUI();
    });

    document.getElementById("btnRematch").addEventListener("click", function () {
        window.location.reload();
    });
    document.getElementById("buyPotion1").addEventListener("click", function() {
        player1.buyItem("Potions", 20);
    });
    document.getElementById("buyEpee1").addEventListener("click", function() {
        player1.buyItem("Epee", 50);
    });

    document.getElementById("buyPotion2").addEventListener("click", function() {
        player2.buyItem("Potions", 20);
    });
    document.getElementById("buyEpee2").addEventListener("click", function() {
        player2.buyItem("Epee", 50);
    });
};
