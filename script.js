function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(id);
    void target.offsetWidth; // relance l'animation à chaque clic
    target.classList.add("active");

    document.getElementById("menu").classList.remove("open");
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

function toggleTheme() {
    const body = document.body;
    const isLight = body.classList.toggle("light");
    document.getElementById("theme-btn").textContent = isLight ? "☀️" : "🌙";
}

function openViewer(img) {
    document.getElementById("viewer-img").src = img.src;
    document.getElementById("viewer").style.display = "flex";
}

function closeViewer() {
    document.getElementById("viewer").style.display = "none";
}
