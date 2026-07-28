// ===== THEME =====

const themeBtn = document.getElementById("theme-btn");

function applyTheme(isLight) {
    document.body.classList.toggle("light", isLight);
    themeBtn.textContent = isLight ? "☀️" : "🌙";
}

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
applyTheme(prefersLight);

themeBtn.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("light"));
});

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    applyTheme(e.matches);
});


// ===== MENU =====

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});


// ===== NAVIGATION ENTRE LES 3 PAGES (Galerie / À propos / Contact) =====

const menuLinks = document.querySelectorAll(".menu-link");
const pages = document.querySelectorAll(".page");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const targetId = link.getAttribute("data-page");
        const target = document.getElementById(targetId);

        pages.forEach(page => page.classList.remove("active"));

        // force le redémarrage de l'animation de glissement à chaque clic
        void target.offsetWidth;
        target.classList.add("active");

        menu.classList.remove("open");
    });
});


// ===== VIEWER (zoom fluide sur les images) =====

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

document.querySelectorAll(".art").forEach(art => {
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
