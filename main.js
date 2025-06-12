// Modo oscuro
const toggleBtn = document.getElementById('darkModeToggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      if(document.body.classList.contains('dark')) {
        toggleBtn.textContent = 'Modo claro';
      } else {
        toggleBtn.textContent = 'Modo oscuro(uuuuu';
      }
    });

    // Botón volver arriba
    const topBtn = document.getElementById('topBtn');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });