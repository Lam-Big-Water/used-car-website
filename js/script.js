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


/* Image lazy loading */
// const images = document.querySelectorAll('img');
// console.log(images);

// let callback = entries =>{
//     entries.forEach( entry => {
//         if (entry.inIntersecting) {
//             const image = entry.target;
//             const data_src = image.getAttribute('data-src');
//             image.setAttribute('src',data_src);
//             observer.unobserve(image);
//             console.log('1');
//         }
//     });
// };

// let observer = new IntersectionObserver(callback);

// images.forEach(image => {
//     observer.observe(image);
// });

/* Image lazy loading */
const images = document.querySelectorAll('img');

const callback = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const image = entry.target;
            const data_src = image.getAttribute('data-src');
            image.setAttribute('src',data_src);
            observer.unobserve(image);
        }
    })
}

const observer = new IntersectionObserver(callback);

images.forEach(image => {
    observer.observe(image);
});


let filterBtn = document.querySelector('#f-btn');
let closeBtn = document.querySelector('#filter-btn');
let filterBar = document.querySelector('#whole');
let mark = document.querySelector('.mark-bg')

if(filterBtn){
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
}

let pag = document.querySelector('#pagination');
if(pag){
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
                '<a><i class="fa fa-chevron-left fa-lg"></i></a>',
                '<span></span>',
                '<a><i class="fa fa-chevron-right fa-lg"></i></a>'
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
}

// turn-top

let TB = document.querySelector('.turn-top');

if(TB) {
    TB.addEventListener('click',function(){
        animate(window, 0);
    })
    
    let W = document.body.scrollHeight;
    
    let A = document.documentElement.scrollTop;
    
    console.log(W);
    console.log(A);
    
    // 动画函数
    function animate(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()
    
        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
}
