document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add active class to navigation links on scroll
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('header ul li');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('showing');
    });
});
