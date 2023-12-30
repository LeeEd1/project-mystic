/**Opens modal
 * sets diplay to block
 */
function openModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "block";
}

/**Closes modal
 * Sets display to none
*/
function closeModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "none";
}

/**Shows the congratulations modal
 * Shows time completed time in strong using template literal
 * 
 */
function showCongratulations() {
    const congratulationsModal = document.getElementById("congratulations-modal");
    const matchTime = 60 - document.querySelector(".time-remaining").textContent;

    const matchTimeFigure = congratulationsModal.querySelector(".match-time");
    matchTimeFigure.innerHTML = `<strong>${matchTime}</strong>`;


    congratulationsModal.style.display = "block";

}

/**Shows game over modal */
function showGameOver() {
    const gameOverModal = document.getElementById("game-over-modal");
    gameOverModal.style.display = "block";
}

/**References open and close buttons */
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

/**Event listeners for clicks on modal */
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);