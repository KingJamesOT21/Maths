    const links = document.querySelector(".mobile-links");
    const menu = document.querySelector('.menu');
    const legal = document.querySelector('.mobile-legal')

    menu.addEventListener('click', function() {
        if (menu.classList.contains('menu')) {
            // Open the menu
            links.style.opacity = '1';
            links.style.pointerEvents = 'all';
            legal.style.opacity = '1';
            legal.style.pointerEvents = 'all';
            menu.classList.add('close');
            menu.classList.remove('menu');
            body.classList.add('no-scroll');
            html.classList.add('no-scroll');
            // Scroll to top
            window.scrollTo({ 
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Close the menu
            links.style.opacity = '0';
            links.style.pointerEvents = 'none';
            legal.style.opacity = '0';
            legal.style.pointerEvents = 'none';
            menu.classList.remove('close');
            menu.classList.add('menu');
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
        }
    });
