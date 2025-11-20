document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtenemos el botón y el cuerpo de la página
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');
    
    // Clave para guardar la preferencia en localStorage
    const storageKey = 'user-theme-mode';

    // 2. Función para aplicar el modo
    function applyMode(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            // Cambiamos el ícono a la luna (Modo Oscuro)
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem(storageKey, 'dark');
        } else {
            body.classList.remove('dark-mode');
            // Cambiamos el ícono al sol (Modo Claro)
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem(storageKey, 'light');
        }
    }

    // 3. Cargar la preferencia del usuario al iniciar
    const savedMode = localStorage.getItem(storageKey);
    // Si hay una preferencia guardada Y es 'dark', o si no hay preferencia pero el sistema prefiere dark
    if (savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyMode(true);
    } else {
        // Por defecto o si es 'light'
        applyMode(false);
    }

    // 4. Añadir el evento de clic al botón
    toggleButton.addEventListener('click', () => {
        // Toggle: si tiene la clase, se la quitamos y viceversa
        const isCurrentlyDark = body.classList.contains('dark-mode');
        applyMode(!isCurrentlyDark);
    });
});