// Menu
function menuToggle() {
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
};

// parallax
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
});

// countdown
const countDate = new Date('january 1, 2022 00:00:00').getTime();

function newYear() {
    const now = new Date().getTime();
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor(gap % (day) / (hour));
    const m = Math.floor(gap % (hour) / (minute));
    const s = Math.floor(gap % (minute) / (second));

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
};

setInterval(function () {
    newYear();
});

// product
function changeColor(event) {
    // reset and remove active class first
    document.querySelectorAll('span.active').forEach(function (item) {
        item.classList.remove('active')
    })

    // add active class to selected menu item
    event.target.classList.add('active')
}
