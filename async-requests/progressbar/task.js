const progressBar = document.getElementById('progress');

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        request.upload.onerror = () => {
            alert('Ошибка загрузки файла');
            progressBar.value = 0.0;
        };

        request.upload.onloadstart = () => {
            progressBar.value = 0.1;
        };

        request.upload.onprogress = () => {
            progressBar.value = 0.2;
        };

        request.upload.onload = () => {
            progressBar.value = 0.3;
        };

        request.upload.onloadend = () => {
            progressBar.value = 0.5;
        };

        request.onprogress = () => {
            progressBar.value = 0.7;
        };
        
        if (request.readyState === request.DONE) {
            progressBar.value = 1.0;
        };
    });

    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    const formData = new FormData(document.forms[0]);

    request.send(formData);
});