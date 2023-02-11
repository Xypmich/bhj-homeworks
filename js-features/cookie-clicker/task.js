const clickCounter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('clicker__click-speed');
const cookie = document.getElementById('cookie');
let clickDate = new Date();
let imgSizeChange = 50;

cookie.onclick = () => {
    clickCounter.textContent = Number(clickCounter.textContent) + 1;
    const newClickDate = new Date();
    clickSpeed.textContent = (1/((newClickDate - clickDate)/1000)).toFixed(2);
    clickDate = newClickDate;
    cookie.width += imgSizeChange;
    cookie.height += imgSizeChange;
    imgSizeChange = -imgSizeChange;
}