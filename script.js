// script.js

// 可添加一些交互功能，例如卡片展开或其他功能
document.querySelectorAll('.card a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("还没想好干嘛 不要乱点呀~");
    });
});
