let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


let filterBtn = document.querySelector('#f-btn');
let closeBtn = document.querySelector('#filter-btn');
let filterBar = document.querySelector('#whole');
let mark = document.querySelector('.mark-bg')

filterBtn.onclick = () => {
    filterBar.style.display = 'flex';

}

mark.onclick = () => {
    filterBar.style.display = 'none';

}


closeBtn.onclick = () => {
    filterBar.style.display = 'none';

}

filterBar.onclick = () => {
    filterBar.classList.remove('fa-times');

}