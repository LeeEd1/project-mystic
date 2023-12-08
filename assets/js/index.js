const imageList = ["dobby.jpg", "dumbledore.jpg", "harry.jpg", "hermione.jpg", "lucius.jpg", "luna.jpg", "ron.jpg", "Voldemort.jpg"];
const shuffledImages = shuffleArray([...imageList, ...imageList]);


//create divs for game board +front+back

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
        frontImg.src = `assets/images/${shuffledImages[i]}`;
        frontDiv.appendChild(frontImg);
        console.log(frontImg);

        const backDiv = document.createElement("div");
        backDiv.className = "back";
        cardDiv.appendChild(backDiv);

        const backImg = document.createElement("img");
        backImg.src = `assets/images/hplogo.jpg`;
        backDiv.appendChild(backImg);

        console.log(backImg);
    }
});

//shuffle card **credit fisher-yates method**
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};
console.log(shuffleArray);