// Modo oscuro
const darkToggle = document.getElementById("darkModeToggle");
  const darkIcon = document.getElementById("darkModeIcon");

  // Opcional: activar modo oscuro si el usuario ya lo tiene activado
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
    darkIcon.textContent = "☀️";
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    darkIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("dark", isDark); // Guardar preferencia
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

