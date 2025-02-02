const menuBtn = document.querySelector('.menu-btn');
const iconBtn = document.querySelector('.menu-btn i');
const dropMenu = document.querySelector('.drop-menu');

menuBtn.onclick = () => {
    dropMenu.classList.toggle('open');
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 630) {
        dropMenu.classList.remove('open');
    }
});