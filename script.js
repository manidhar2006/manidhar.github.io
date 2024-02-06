document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            this.classList.add('hover');
        });
        link.addEventListener('mouseleave', function () {
            this.classList.remove('hover');
        });
    });
});
