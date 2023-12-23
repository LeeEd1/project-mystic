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

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);