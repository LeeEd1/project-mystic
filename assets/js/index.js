const imageList = ["dobby.jpg", "dumbledore.jpg", "harry.jpg", "hermione.jpg", "lucius.jpg", "luna.jpg", "ron.jpg", "Voldemort.jpg"];
let shuffledImages = shuffleArray([...imageList, ...imageList]);
let cardClickCount = false;
let matchesCount = 0;
let timeInterval;
let gameStarted = false;

//create divs for game board +front+back

document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const startGameButton = document.querySelector(".startgame");
    const newGameButton = document.querySelector(".newGame");

    startGameButton.addEventListener("click", function () {
        if (!gameStarted) {
            console.log("game starting");
            startGame();
            gameStarted = true;
        }
    });


    newGameButton.addEventListener("click", resetGame);

    for (let i = 0; i < 16; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        gameContainer.appendChild(cardDiv);

        const frontDiv = document.createElement("div");
        frontDiv.className = "front";
        cardDiv.appendChild(frontDiv);

        const frontImg = document.createElement("img");
        frontImg.src = `assets/images/hplogo.jpg`;
        frontDiv.appendChild(frontImg);

        const backDiv = document.createElement("div");
        backDiv.className = "back";
        cardDiv.appendChild(backDiv);

        const backImg = document.createElement("img");
        backImg.src = `assets/images/${shuffledImages[i]}`;
        backDiv.appendChild(backImg);

        cardDiv.addEventListener("click", function () {
            flipCard(cardDiv);
        });
    }

    const newGame = document.querySelector(".newGame");
    newGame.addEventListener("click", resetGame);
});

function startGame() {
    let timeRemaining = 60;

    timerInterval = setInterval(function () {
        timeRemaining--;

        if (timeRemaining <= 0) {
            document.querySelector(".time-remaining").textContent = 0;
            console.log("time up");
            clearInterval(timerInterval);
        } else {
            document.querySelector(".time-remaining").textContent = timeRemaining;
        };
    }, 1000);
};

function flipCard(card) {
    if (!card.classList.contains("flip") && !cardClickCount) {
        card.classList.add("flip");

        const flippedCards = document.querySelectorAll(".card.flip:not(.matched)");

        if (flippedCards.length === 2) {
            cardClickCount = true;

            const [firstCard, secondCard] = flippedCards;
            const firstImg = firstCard.querySelector(".back img").src;
            const secondImg = secondCard.querySelector(".back img").src;

            if (firstImg === secondImg) {
                flippedCards.forEach(card => card.classList.add("matched"));

                matchesCount++;
                document.querySelector(".matches").textContent = matchesCount;
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => card.classList.remove("flip"));
                }, 1000);
            };
            setTimeout(() => {
                cardClickCount = false;
            }, 1000);
        };
    };
};

function resetGame() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";

    cardClickCount = false;
    matchesCount = 0;

    document.querySelector(".matches").textContent = matchesCount;

    console.log("score reset");

    clearInterval(timerInterval);

    const timeRemainder = document.querySelector(".time-remaining");
    timeRemainder.textContent = 60;

    shuffledImages = shuffleArray([...imageList, ...imageList]);

    for (let i = 0; i < 16; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        gameContainer.appendChild(cardDiv);

        const frontDiv = document.createElement("div");
        frontDiv.className = "front";
        cardDiv.appendChild(frontDiv);

        const frontImg = document.createElement("img");
        frontImg.src = `assets/images/hplogo.jpg`;
        frontDiv.appendChild(frontImg);

        const backDiv = document.createElement("div");
        backDiv.className = "back";
        cardDiv.appendChild(backDiv);

        const backImg = document.createElement("img");
        backImg.src = `assets/images/${shuffledImages[i]}`;
        backDiv.appendChild(backImg);

        cardDiv.addEventListener("click", function () {
            flipCard(cardDiv);
        });
    }
    console.log("reset");
}


//shuffle cards **credit fisher-yates method**
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};