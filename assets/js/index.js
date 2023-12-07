document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");

    for (let i = 0; i < 16; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        gameContainer.appendChild(cardDiv);
        console.log(i);

    }
});