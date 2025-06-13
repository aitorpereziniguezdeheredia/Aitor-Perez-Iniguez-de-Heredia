// Modo oscuro
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Modo claro";
  } else {
    toggleBtn.textContent = "Modo oscuro";
  }
});

// Botón volver arriba
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Cambiar idioma
function switchLanguage() {
  const currentPath = window.location.pathname;

  if (currentPath.includes("index.html")) {
    // Si está en español, cambia al inglés
    window.location.href = "main-english.html";
    
  } else {
    // Si ya está en inglés, cambia al español
    window.location.href = "index.html";
  }
}

// Cambiar la bandera del botón según el idioma actual
const isEnglish = window.location.pathname.includes("main-english.html");
const langFlag = document.getElementById("langFlag");

if (langFlag) {
  langFlag.className = isEnglish ? "fi fi-es" : "fi fi-us"; // 🇪🇸 o 🇺🇸
}

