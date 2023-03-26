const loadAnimation = document.getElementById('loader');
const items = document.getElementById('items');
const request = new XMLHttpRequest();

function htmlData(itemsHtml) {
    const currencyKeys = Object.keys(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let currencyData = JSON.parse(localStorage.getItem(currencyKeys[i]));
        itemsHtml.innerHTML += `
        <div class="item">
            <div class="item__code">
                ${currencyData['CharCode']}
            </div>
            <div class="item__value">
                ${currencyData['Value']}
            </div>
            <div class="item__currency">
                ${currencyData['Name']}
            </div>
        </div>
        `;
    };
};

function currencyOnScreen(loadAnimationHtml) {
    loadAnimationHtml.classList.remove('loader_active');
    htmlData(items);
};

if (localStorage.length) {
    currencyOnScreen(loadAnimation);
};

request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        const response = JSON.parse(request.response).response.Valute;
        const responseKeys = Object.keys(response);
        for (i = 0; i < responseKeys.length; i++) {
            localStorage.setItem(responseKeys[i], JSON.stringify(response[responseKeys[i]]));
        };
        items.innerHTML = '';
        currencyOnScreen(loadAnimation);
    };
});
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
request.send();