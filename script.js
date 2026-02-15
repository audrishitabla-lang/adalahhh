// Elements
const envelope = document.getElementById("envelope");
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const noWrapper = document.querySelector(".no-wrapper");

const finalText = document.getElementById("final-text");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

// Envelope click → open letter
envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    setTimeout(() => {
        envelopeContainer.style.display = "none";
        letterContainer.style.display = "flex";
        letterWindow.classList.add("open");
    }, 600);
});

// NO button moves away
noBtn.addEventListener("mouseenter", () => {
    const distance = 150;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    noBtn.style.transition = "transform 0.3s ease";
    noWrapper.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES button click
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeee!";
    catImg.src = "cat_dance.gif";
    letterWindow.classList.add("final");
    finalText.style.display = "block";
    document.getElementById("letter-buttons").style.display = "none";
});
