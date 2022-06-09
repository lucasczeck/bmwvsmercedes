const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
var specs_bmw = document.querySelector('.specs-bmw');
var title_bmw = document.querySelector('#title-left');
var btn_bmw = document.querySelector('#btn-left');
var specs_mercedes = document.querySelector('.specs-mercedes');
var title_mercedes = document.querySelector('#title-right');
var btn_mercedes = document.querySelector('#btn-right');

function open_bmw(){
    specs_bmw.style.display = 'block';
    title_bmw.style.display = 'none';
    btn_bmw.style.display = 'none';
}

function open_mercedes(){
    specs_mercedes.style.display = 'block';
    title_mercedes.style.display = 'none';
    btn_mercedes.style.display = 'none';
}

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
