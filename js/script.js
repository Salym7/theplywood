'use strict'

const menuButton = document.querySelector('.menu-button');
const menuMob = document.querySelector('.menu-mob');

const menuMobArrow = document.querySelectorAll('.arrow')
const menuMobDropdawns = document.querySelectorAll('.menu-mob__list .dropdown')

menuMobArrow.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentItem = e.target.closest('.dropdown');
        console.log(currentItem);
        currentItem.classList.toggle('dropdown-active');
    })
});

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    menuButton.classList.toggle('active-btn');
    menuMob.classList.toggle('active');
    document.body.classList.toggle('lock')
    menuMobDropdawns.forEach(item => {
        item.classList.remove('dropdown-active')
    })
})

const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
    },
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

