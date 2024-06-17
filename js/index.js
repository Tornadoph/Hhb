

let currentIndex = 0; // 当前显示的图片索引
const slides = document.querySelectorAll('.carousel-slide'); // 所有图片容器
const indicators = document.querySelectorAll('.indicator'); // 所有指示器

function moveSlide(step) {
    // 移除当前活动的类
    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    // 计算新的索引
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    // 添加活动类到新的索引
    slides[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

function jumpSlide(index) {
    // 移除当前活动的类
    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    // 设置新的索引
    currentIndex = index;
    // 添加活动类到新的索引
    slides[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

// 自动轮播
let autoPlayInterval = setInterval(() => {
    moveSlide(1);
}, 3000); // 3000毫秒（3秒）切换一次

// 鼠标悬停时停止自动播放
document.querySelector('.banner').addEventListener('mouseover', () => {
    clearInterval(autoPlayInterval);
});

// 鼠标离开时开始自动播放
document.querySelector('.banner').addEventListener('mouseout', () => {
    autoPlayInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
});
