    const links = document.querySelector(".mobile-links");
    const menu = document.querySelector('.menu');

    menu.addEventListener('click', function() {
        if (menu.classList.contains('menu')) {
            // Open the menu
            links.style.opacity = '1';
            links.style.pointerEvents = 'all';
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
            menu.classList.remove('close');
            menu.classList.add('menu');
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
        }
    });


    document.querySelectorAll('.drop-down-button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });