var iconNav = document.getElementById('icon-open-nav');
var navMenu = document.getElementById('nav-menu');
var closeNav = document.getElementById('close-sidebar');
var body = Array.from(document.getElementsByTagName('body'));

function openNavMenu() {
    navMenu.classList.add('is_open');
    body.forEach(item=>{
        item.classList.add('overflow');
    });
}
function closeNavMenu() {
    navMenu.classList.remove('is_open');
    body.forEach(item => {
        item.classList.remove('overflow');

    });
}