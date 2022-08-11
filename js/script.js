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

var Pagination={
    // 用于存放页码
    code:'',
    // 转换初始化数据
    Extend:function(data){
        data = data || {};
        Pagination.size = data.size || 30;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },
    // 按编号添加页码
    Add:function(s,f){
        for(var i = s; i < f; i++) {
            Pagination.code += `<a> ${i} </a>`;
        }
    },
    // 添加省略号的第一页
    First:function(){
        Pagination.code += `<a>1</a><i>...</i>`;
    },
    Last:function(){
        Pagination.code += `<i>...</i><a>${Pagination.size}</a>`;
    },
    // 更改页码
    Click:function(){
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },
    // 上一页
    Prev:function(){
        Pagination.page--;
        if(Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },
    // 下一页
    Next:function(){
        Pagination.page++;
        if(Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },
    // 绑定页码点击事件，并设置当前页样式
    Bind:function(){
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if(+a[i].innerHTML === Pagination.page){
                a[i].className = 'current';
            }
            a[i].addEventListener('click', Pagination.Click);
        }
    },
    // 写入分页
    Finish:function(){
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },
    // 根据分页类型作不同的呈现
    Start:function(){
        if(Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if(Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if(Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.Finish();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2,
            Pagination.size + 1);
        }
        else {
            Pagination.Finish();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },
    // 绑定上一页，下一页按钮的点击事件
    Buttons:function(e){
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev);
        nav[1].addEventListener('click', Pagination.Next);
    },
    // 创建初始化结构
    Create:function(e){
        var html = [
            '<a>&#9668;</a>',
            '<span></span>',
            '<a>&#9658;</a>'
        ];
        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },
    // 初始化
    Init:function(e, data){
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
}

// 绑定分页组件， 并设置分页参数
var init = function(){
    Pagination.Init(document.getElementById('pagination'),{
        size:5,
        page:1,
        step:4
    });
}

// dom 内容加载完毕后初始化分页组件
document.addEventListener('DOMContentLoaded', init);



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