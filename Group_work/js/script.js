
'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

const buttonHeader = document.querySelector('.button_header');
const buttonHeaderMenu = document.querySelector('.button_header_menu');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
        buttonHeader.classList.add('hide-button_header');
        buttonHeaderMenu.classList.add('show-button_header_menu');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');

        buttonHeader.classList.remove('hide-button_header');
        buttonHeaderMenu.classList.remove('show-button_header_menu');
    }
})


const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
	header.classList.toggle(
		"is-sticky",
		window.scrollY > headerTop
	);
});

