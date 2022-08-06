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


/* plugin */

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
/* plugin */

// let loadMoreBtn = document.querySelector('.packages .load-more .btn');
// let currentItem = 3;

//     loadMoreBtn.onclick = () =>{
//     let boxes = [...document.querySelectorAll('.packages .box-container .box')];
//     for (var i = currentItem; i < currentItem + 3; i++){
//         boxes[i].style.display = 'inline-block';
//     };
//     currentItem += 3;
//     if(currentItem >= boxes.length){
//         loadMoreBtn.style.display = 'none';
//     }
// }

/* switch fixed & absolute*/
// let collect = document.querySelector('.products .img-area .collect');
// let content = document.querySelector('.products .details .content');
// let collectTop = collect.offsetTop;
// console.log(collectTop);
// let contentTop = content.offsetTop;
// console.log(contentTop);

// document.addEventListener('scroll', ()=>{
//     if (window.pageYOffset >= collectTop) {
//         content.style.position = 'absolute';
//     }
// })

/* switch fixed & absolute*/