const textElement = document.getElementById("typewriter");
const words = ["Alternative Capital", "Strategic Credit", "Business Loans", "Startup Capital"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        speed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);

function toggleMenu() {
    alert("Mobile menu clicked! You can expand the CSS to show the navbar here.");
}