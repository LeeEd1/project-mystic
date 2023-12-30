/**Global variables */
const imageList = ["dobby.jpg", "dumbledore.jpg", "harry.jpg", "hermione.jpg", "lucius.jpg", "luna.jpg", "ron.jpg", "Voldemort.jpg"];
let shuffledImages = shuffleArray([...imageList, ...imageList]);
let cardClickCount = false;
let matchesCount = 0;
let timerInterval;
let gameStarted = false;


/**Executes the provided function once the DOM is fully loaded
 * I have left individual comments as this section is longer
 */
document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const startGameButton = document.querySelector(".startgame");
    const newGameButton = document.querySelector(".newgame");

    //Hides the initial game board until start game is clicked
    gameContainer.style.visibility = "hidden";

    //Event listener for start game button when clicked & gameboard visibility
    startGameButton.addEventListener("click", function () {
        if (!gameStarted) {
            gameContainer.style.visibility = "visible";
            startGame();
            gameStarted = true;
        }
    });

    //Event listener for resetting the game when New game is clicked
    newGameButton.addEventListener("click", resetGame);

    //For loop to create 16 card elements and set up structure
    for (let i = 0; i < 16; i++) {
        //Create a card div
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        gameContainer.appendChild(cardDiv);

        //create front side of card
        const frontDiv = document.createElement("div");
        frontDiv.className = "front";
        cardDiv.appendChild(frontDiv);

        //Adds image to card
        const frontImg = document.createElement("img");
        frontImg.src = `assets/images/hplogo.jpg`;
        frontImg.alt = "Back of card";
        frontDiv.appendChild(frontImg);

        //Creates Back side of card
        const backDiv = document.createElement("div");
        backDiv.className = "back";
        cardDiv.appendChild(backDiv);

        //Adds image to back
        const backImg = document.createElement("img");
        backImg.src = `assets/images/${shuffledImages[i]}`;
        const altForImg = shuffledImages[i].substring(0, shuffledImages[i].length - 4);
        backImg.alt = altForImg + ", the character from harry potter";
        backDiv.appendChild(backImg);

        //Event listener for clicking on a card to flip card
        cardDiv.addEventListener("click", function () {
            flipCard(cardDiv);
        });
    }

    //Event listener for resetting when new game clicked
    const newGame = document.querySelector(".newgame");
    newGame.addEventListener("click", resetGame);
});

/**Start game function
 * Start timer with 60 seconds
 * Hides modal and button when start game is clicked
 * set interval to update timer every second and decrease by 1 second
 * Checks if timer has run out 
 * Stops timer interval
 * mark the game as not started and show game over screen
 * Updates the time remaining with the current time
 */
function startGame() {
    let timeRemaining = 60;

    document.querySelector(".open").style.display = "none";
    document.querySelector(".modal-container").style.display = "none";

    timerInterval = setInterval(function () {
        timeRemaining--;

        if (timeRemaining <= 0) {
            document.querySelector(".time-remaining").textContent = 0;
            clearInterval(timerInterval);
            gameStarted = false;
            showGameOver();
        } else {
            document.querySelector(".time-remaining").textContent = timeRemaining;
        }
    }, 1000);
}

/**Flip card function
 * Checks if card is not already flipped and if no other card is currently flipped
 * Flips the card
 * Gets the cards that are not already matched
 * Checks if two cards are flipped and disble clicks untill comparison is complete
 * Breaks down the array to separately refer to the first and second flipped cards
 * Get image source of the two flipped cards
 * Compares the images and marks them matched if match
 * updates matches and increments by 1 if successful
 * Checks if all matches found
 * Stops the timer and marks the game as not started then shows congratulations
 * If images dont match they flip back after 1 second
 * Allows clicks after 1 second to allow for flipping animation to complete.
 */
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

                if (matchesCount === imageList.length) {
                    clearInterval(timerInterval);
                    gameStarted = false;
                    showCongratulations();
                }
            } else {
                setTimeout(() => {
                    flippedCards.forEach(card => card.classList.remove("flip"));
                }, 1000);
            }
            setTimeout(() => {
                cardClickCount = false;
            }, 1000);
        }
    }
}

/**Function to reset the game */
function resetGame() {
    window.location.reload();
}


//shuffle cards **credit fisher-yates method**
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}