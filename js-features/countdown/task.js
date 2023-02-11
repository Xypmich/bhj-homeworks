const timer = document.getElementById('timer');

interval = setInterval(() => {
    const timerList = timer.textContent.split(':');
    let timerHours = timerList[0];
    let timerMinutes = timerList[1];
    let timerSeconds = timerList[2];
    if (timer.textContent == '00:00:00') {
        alert('Вы победили в конкурсе! Чтобы забрать приз, оплатите доставку в размере 5000₽');
        clearInterval(interval);
        return
    }
    timerSeconds = Number(timerSeconds) - 1;
    if (Number(timerSeconds) < 0) {
        if (Number(timerMinutes) > 0) {
            timerSeconds = 59;
            timerMinutes = Number(timerMinutes) - 1;
        } else if (Number(timerMinutes) == 0 && Number(timerHours) > 0) {
            timerHours = Number(timerHours) - 1;
            timerMinutes = 59;
            timerSeconds = 59;
        }
    }
    timer.textContent = `${String(timerHours).padStart(2, '0')}:${String(timerMinutes).padStart(2, '0')}:${String(timerSeconds).padStart(2, '0')}`;
}, 1000)