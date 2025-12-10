// ==========================
// 1. MOBILE MENU TOGGLE
// ==========================
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}



// ==========================
// 2. ACTIVE LINK ON SCROLL
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});



// ==========================
// 3. SCROLL REVEAL ANIMATION
// ==========================
window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}



// ==========================
// 4. IMAGE SLIDER (AUTO + MANUAL)
// ==========================
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("my-slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// ==========================
// 5. TAB NAVIGATION
// ==========================
function openTab(tabName) {
    let contents = document.getElementsByClassName("tab-content");
    let buttons = document.getElementsByClassName("tab-btn");

    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}



// ==========================
// 6. POPUP MODAL
// ==========================
function openPopup() {
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}



// ==========================
// 7. DARK / LIGHT MODE
// ==========================
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // Save user preference  
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

