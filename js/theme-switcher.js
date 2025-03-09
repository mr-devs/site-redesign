try {
    const switcher = document.getElementById('theme-switcher');
    const themeIcon = document.getElementById('theme-icon');
    const navbar = document.querySelector('nav.navbar'); // new navbar selection
    if (!switcher) {
        console.error("Theme switcher button not found in the DOM.");
    } else {
        console.log("Theme switcher button found; attaching event listener.");
        switcher.addEventListener('click', () => {
            try {
                // Toggle light mode: if light mode active remove it; otherwise add it.
                if (document.body.classList.contains('light-mode')) {
                    document.body.classList.remove('light-mode');
                    // Optional: update icon (assume sun means dark mode)
                    if (themeIcon) themeIcon.className = "bi bi-lightbulb-fill";
                    // Set button for dark mode
                    switcher.className = "btn btn-outline-light btn-sm";
                    console.log("Switched to dark mode.");
                } else {
                    document.body.classList.add('light-mode');
                    // Optional: update icon (assume moon means light mode)
                    if (themeIcon) themeIcon.className = "bi bi-lightbulb-off-fill";
                    // Set button for light mode
                    switcher.className = "btn btn-outline-dark btn-sm";
                    console.log("Switched to light mode.");
                }
                // Update navbar theme based on body class
                if (document.body.classList.contains('light-mode')) {
                    navbar.classList.remove('navbar-dark');
                    navbar.classList.add('navbar-light');
                    navbar.style.backgroundColor = 'white';
                } else {
                    navbar.classList.remove('navbar-light');
                    navbar.classList.add('navbar-dark');
                    navbar.style.backgroundColor = 'black';
                }
            } catch (toggleError) {
                console.error("Error toggling theme mode:", toggleError);
            }
        });
    }
} catch (setupError) {
    console.error("Failed to set up theme switcher:", setupError);
}
