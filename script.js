// Smooth Scrolling
document.querySelectorAll('.menu-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
