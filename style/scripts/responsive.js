const close_menu = document.getElementById('close-menu');
const mobile_nav = document.getElementById('mobile-nav');
const open_menu = document.getElementById('open-menu');

close_menu.addEventListener('click', (e) => {
    mobile_nav.classList.toggle('hidden');
})

open_menu.addEventListener('click', (e) => {
    mobile_nav.classList.toggle('hidden');
})