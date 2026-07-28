// ===== THEME (selon les préférences système de l'utilisateur) =====

const themeBtn = document.getElementById("theme-btn");

function applyTheme(isLight) {
    document.body.classList.toggle("light", isLight);
    themeBtn.textContent = isLight ? "☀️" : "🌙";
}

// Détecte la préférence système au chargement
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(prefersLight);

// Permet aussi de forcer le changement manuellement au clic
themeBtn.addEventListener("click", () => {
    const isCurrentlyLight = document.body.classList.contains("light");
    applyTheme(!isCurrentlyLight);
});

// Suit les changements de préférence système en direct
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    applyTheme(e.matches);
});


// ===== MENU =====

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});


// ===== NAVIGATION ENTRE LES PAGES =====

const menuLinks = document.querySelectorAll(".menu-link");
const pages = document.querySelectorAll(".page");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-page");

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(targetId).classList.add("active");

        // Ferme le menu après avoir choisi une option
        menu.classList.remove("open");
    });
});


// ===== VIEWER (zoom fluide sur les images de la galerie) =====

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const artImages = document.querySelectorAll(".art");

artImages.forEach(art => {
    if (art.tagName === "IMG") {
        art.addEventListener("click", () => {
            viewerImg.src = art.src;
            viewer.style.display = "flex";
        });
    }
});

viewer.addEventListener("click", () => {
    viewer.style.display = "none";
});
