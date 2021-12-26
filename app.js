const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.list');
    const navLinks = document.querySelectorAll('.list li');
    
    burger.addEventListener('click', () => {
        
        //toggle nav    
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`; 
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

const footerSlide = () => {
    const burger2 = document.querySelector('.burger2');
    const footerList = document.querySelector('.footer-list-2');
    const footerLinks = document.querySelectorAll('.footer-list-2 li');

    burger2.addEventListener('click', () => {

        //toggle menu
        footerList.classList.toggle('nav-active');

        //animate 
        footerLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`; 
            }
        });

        //burger2 animation
        burger2.classList.toggle('toggle');
    });
}
footerSlide();