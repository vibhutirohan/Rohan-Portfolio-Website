// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.querySelector(".typing");
    const phrases = [
        "I'm a Computer Science Student",
        "I'm a Software Developer",
    ];
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (!isDeleting && charIndex < currentPhrase.length) {
            // Typing forward
            typingElement.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else if (isDeleting && charIndex > 0) {
            // Deleting backward
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 50); // Deleting speed
        } else if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause before deleting
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1500);
        } else if (isDeleting && charIndex === 0) {
            // Move to the next phrase
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, 500); // Pause before re-typing
        }
    }

    type();
});



// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
    link.addEventListener("click", hideNavMenu);
});