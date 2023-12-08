const imageList = ["dobby.jpg", "dumbledore.jpg", "harry.jpg", "hermione.jpg", "lucius.jpg", "luna.jpg", "ron.jpg", "Voldemort.jpg"];


document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");

    for (let i = 0; i < 16; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        gameContainer.appendChild(cardDiv);

        const frontDiv = document.createElement("div");
        frontDiv.className = "front";
        cardDiv.appendChild(frontDiv);

        const frontImg = document.createElement("img");
        frontImg.src = `assets/images/${imageList[i]}`;
        frontDiv.appendChild(frontImg);
        console.log(frontImg);

        const backDiv = document.createElement("div");
        backDiv.className = "back";
        cardDiv.appendChild(backDiv);

        console.log(backDiv);
    }
});