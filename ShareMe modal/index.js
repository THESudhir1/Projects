const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openmodal = () => {
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closemodal = () => {
    console.log("closing the modal");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}