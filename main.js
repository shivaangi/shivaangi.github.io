window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0

    header.classList.toggle("scroll_nav", windowPosition);
});


const button = document.querySelector(".nav_hamburger_inner")
const menuopen = document.querySelector(".menu_MenuContainer");
const hum = document.querySelector(".nav_hamburger_menu");
const navList = document.querySelector(".menu_nav_list");

hum.onclick = function() {
    button.classList.toggle("close_btn");
    menuopen.classList.toggle("menu-open");
}

window.addEventListener('click', function(e) {
    let clickElement = e.target;
    if (clickElement.matches(".menu-open")) {
        button.classList.remove("close_btn");
        menuopen.classList.remove("menu-open");
    }
})

navList.addEventListener('click', function(e) {
    let clickElement = e.target;

    if (clickElement.classList[0] === "menu_navlink") {
        button.classList.remove("close_btn");
        menuopen.classList.remove("menu-open");
    }
})


gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.hero_section', {
    opacity: 0,
    y: '-30%',
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: '-50%',
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")
tl.from('header', {
    opacity: 0,
    y: '30%',
    ease: Power4.easeOut,
    duration: 1
}, "-=2")
tl.from('.stagger2', {
    opacity: 0,
    y: '30%',
    ease: Power4.easeOut,
    duration: 1
}, "-=2")

// gsap.from(".transition2", {
//     ScrollTrigger: {
//         trigger: '.transition2',
//         start: "top top"
//     },
//     y: '50%',
//     opacity: 0,
//     duration: 1.2,
//     stagger: .3
// })
// gsap.from(".transition3", {
//     ScrollTrigger: {
//         trigger: '.transition3',
//         start: "top top"
//     },
//     y: '50%',
//     opacity: 0,
//     duration: 1.2,
//     stagger: .6
// })