const widgetBtn = document.querySelector('.chat-widget__side');
const chatInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const botAnswers = [
    'Ответ 1',
    'Ответ 2',
    'Ответ 3',
    'Ответ 4',
    'Ответ 5',
    'Ответ 6',
    'Ответ 7',
    'Ответ 8',
    'Ответ 9',
    'Ответ 10',
    'Ответ 11',
    'Ответ 12',
    'Ответ 13',
    'Ответ 14',
    'Ответ 15',
    'Фёдор',
];

widgetBtn.onclick = () => {
    if (widgetBtn.closest('.chat-widget').classList.contains('chat-widget_active')) {
        widgetBtn.closest('.chat-widget').classList.remove('chat-widget_active');
    } else {
        widgetBtn.closest('.chat-widget').classList.add('chat-widget_active');
    };
};

chatInput.addEventListener('keyup', key => {
    if (key.code == 'Enter' && chatInput.value != '') {
        let curTime = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${curTime.getHours()}:${curTime.getMinutes()}</div>
                <div class="message__text">
                ${chatInput.value}
                </div>
            </div>
            `;
        curTime = new Date();
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${curTime.getHours()}:${curTime.getMinutes()}</div>
            <div class="message__text">
            ${botAnswers[Math.round(Math.random() * 15)]}
            </div>
        </div>
        `;
    }
});