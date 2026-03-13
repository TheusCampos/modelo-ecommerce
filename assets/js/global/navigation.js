/**
 * Navigation Logic
 */
export const initNavigation = () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle text
            if (navLinks.classList.contains('active')) {
                menuBtn.innerText = 'FECHAR';
            } else {
                menuBtn.innerText = 'MENU';
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.innerText = 'MENU';
            });
        });
    }
};
