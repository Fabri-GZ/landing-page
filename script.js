const links = document.querySelectorAll('a.hvr-underline-from-center');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (targetElement) {

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    