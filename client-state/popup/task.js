const popup = document.getElementById('subscribe-modal');
const closeBtn = popup.querySelector('.modal__close');

if (!document.cookie.includes('popup=closed')) {
    popup.classList.add('modal_active')
};

closeBtn.onclick = () => {
    popup.classList.remove('modal_active');
    document.cookie = 'popup=closed'
};