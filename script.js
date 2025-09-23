document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.urun-dropdown');
    const menu = document.querySelector('.urun-menu');

    if (dropdown && menu) {
        dropdown.addEventListener('mouseenter', () => {
            menu.style.visibility = 'visible';
            menu.style.opacity = '1';
            menu.style.pointerEvents = 'auto';
        });

        dropdown.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!menu.matches(':hover')) {
                    menu.style.visibility = 'hidden';
                    menu.style.opacity = '0';
                    menu.style.pointerEvents = 'none';
                }
            }, 100);
        });

        menu.addEventListener('mouseenter', () => {
            menu.style.visibility = 'visible';
            menu.style.opacity = '1';
            menu.style.pointerEvents = 'auto';
        });

        menu.addEventListener('mouseleave', () => {
            menu.style.visibility = 'hidden';
            menu.style.opacity = '0';
            menu.style.pointerEvents = 'none';
        });

        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menu.style.visibility = 'hidden';
                menu.style.opacity = '0';
                menu.style.pointerEvents = 'none';
            });
        });
    }
});

