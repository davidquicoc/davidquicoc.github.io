let darkmode = localStorage.getItem("darkmode");
const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav-menu");
const themeSwitch = document.getElementById("theme-switch");

//  Menú desplegable
menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

//  Tema de la página
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

//  Año actual
document.querySelector("#current-year").textContent = new Date().getFullYear();