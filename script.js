
    document.addEventListener('DOMContentLoaded', function () {
        const scrollLinks = document.querySelectorAll('.scroll-to-top');

        scrollLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    function scrollDown() {
        // You can adjust the value (e.g., 500) to control the scroll distance
        window.scrollBy({ top:1200, behavior: 'smooth' });
    }
    
    

    
