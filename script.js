setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = '<i class="ri-heart-fill"></i>';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.animationDuration = "8s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}, 400);

const containers = [
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("container3")
];

let current = 0;

function showNextContainer() {
    if (current > 0 && current < containers.length) {
        containers[current - 1].classList.remove("show");
        containers[current - 1].classList.add("hide");
    }

    if (current < containers.length) {
        containers[current].classList.remove("hide");
        containers[current].classList.add("show");
        current++;

        if (current < containers.length) {
            setTimeout(showNextContainer, 5000);
        }
    }
}

setTimeout(showNextContainer, 3000);

const buttonNo = document.querySelector(".button-no");
const noTexts = [
    "Jesteś pewna?",
    "Naprawdę?",
    "Kochanie, proszę",
    "Błagam Cię!"
];
let clickCount = 0;

buttonNo.addEventListener("click", () => {
    if (clickCount < noTexts.length) {
        buttonNo.textContent = noTexts[clickCount];
        buttonNo.style.opacity = `${1 - (clickCount + 1) * 0.2}`;
        buttonNo.style.transform = `scale(${1 - (clickCount + 1) * 0.15})`;
        clickCount++;
    }

    if (clickCount >= noTexts.length) {
        buttonNo.style.display = "none";
        finalText.style.display = "block";
    }
});

const buttonYes = document.querySelector(".button-yes");
const container4 = document.getElementById("container4");
const container3 = document.getElementById("container3");

container4.style.display = "none";

buttonYes.addEventListener("click", () => {
    container3.classList.remove("show");
    container3.classList.add("hide");

    container4.style.display = "block";
    container4.classList.add("show");

});
