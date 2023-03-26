const request = new XMLHttpRequest();
const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        title.textContent = JSON.parse(request.response).data.title;
        JSON.parse(request.responseText).data.answers.forEach(answer => {
            answers.innerHTML += `
            <button class="poll__answer">
                ${answer}
            </button>
            `;
        });
    };    
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();

answers.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!');
    document.location.reload();
});