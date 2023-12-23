function openModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "block";
    console.log("Modal opened");
};

function closeModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "none";
    console.log("Modal closed");
};

function showCongratulations() {
    const congratulationsModal = document.getElementById("congratulations-modal");
    const matchTime = 60 - document.querySelector(".time-remaining").textContent;

    const matchTimeFigure = congratulationsModal.querySelector(".match-time");
    matchTimeFigure.innerHTML = `<strong>${matchTime}</strong>`;
    console.log("Match time");

    congratulationsModal.style.display = "block";
    console.log("modal congrats");
};

function showGameOver() {
    const gameOverModal = document.getElementById("game-over-modal");
    gameOverModal.style.display = "block";
    console.log("modal game over");
};

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);