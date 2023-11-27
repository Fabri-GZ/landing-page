function redirectToURL() {
    window.open("https://github.com/Fabri-GZ", "_blank");
   }

const links = document.querySelectorAll('a.hvr-underline-from-center');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    