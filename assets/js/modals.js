function openModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "block";
}

function closeModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "none";
}

function showCongratulations() {
    const congratulationsModal = document.getElementById("congratulations-modal");
    const matchTime = 60 - document.querySelector(".time-remaining").textContent;

    const matchTimeFigure = congratulationsModal.querySelector(".match-time");
    matchTimeFigure.innerHTML = `<strong>${matchTime}</strong>`;


    congratulationsModal.style.display = "block";

}

function showGameOver() {
    const gameOverModal = document.getElementById("game-over-modal");
    gameOverModal.style.display = "block";
}

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);