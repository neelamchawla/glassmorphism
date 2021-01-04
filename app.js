function menuToggle() {
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}

let bg = document.getElementById("bgMoon");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("MoonText");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    bg.style.top = -value * 0.2 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.05 + 'px';
    text.style.top = value * 0.1 + 'px';
})