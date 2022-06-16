let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menu.addEventListener('click', function (){
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const sr = ScrollReveal({
    distance: '80px',
    duration: 2800,
    reset: true
});

sr.reveal('.text,.social, .container-cards', {delay:300, origi: 'bottom'})
sr.reveal('header', {delay:100, origi: 'bottom'})