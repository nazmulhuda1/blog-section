

let menuBar = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let overlay = document.querySelector('.overlay');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', scrollY > 0)
});

// menu slide
menuBar.onclick = () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active')
}
overlay.onclick = () => {
    overlay.classList.remove('active')
    navbar.classList.remove('active');

}
window.onscroll = () => {
    navbar.classList.remove('active')
    overlay.classList.remove('active')
}