// let menuBtn, iconBtn, dropMenu;

const menuBtn = document.querySelector('.menu-btn');
const iconBtn = document.querySelector('.menu-btn i');
const dropMenu = document.querySelector('.drop-menu');

menuBtn.onclick = () => {
    dropMenu.classList.toggle('open');
}