// alert for project view button
const cardButtons = document.querySelectorAll(".card-btn");
cardButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("This project is a demo.");
    });
});

