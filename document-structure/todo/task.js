const taskForm = document.forms[0];
const taskList = document.getElementById('tasks__list');
let counter = 1;

function addTask(tasksList, title) {
    tasksList.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `;

    tasksList.querySelectorAll('.task__remove').forEach(remover => {
        remover.onclick = () => {
            localStorage.removeItem(remover.closest('.task').querySelector('.task__title').innerText);
            remover.closest('.task').remove();
        };
    });
};

if (localStorage.length) {
    const storageKeys = Object.keys(localStorage);
    for (i = 0; i < storageKeys.length; i++) {
        addTask(taskList, storageKeys[i]);
    };
};

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = taskForm.querySelector('.tasks__input');

    if (input.value.trim()) {
        addTask(taskList, input.value.trim());

        taskList.querySelectorAll('.task__remove').forEach(remover => {
            remover.onclick = () => {
                localStorage.removeItem(remover.closest('.task').querySelector('.task__title').innerText);
                remover.closest('.task').remove();
            };
        });

        localStorage.setItem(input.value, input.value);
    };

    input.value = '';
});