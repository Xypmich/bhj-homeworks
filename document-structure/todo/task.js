const taskForm = document.forms[0];
const taskList = document.getElementById('tasks__list');
let counter = 1;

function addTask(tasksList, title) {
    tasksList.insertAdjacentHTML('beforeEnd', `
    <div class="task">
        <div class="task__title">
            ${title}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `);

    let list = tasksList.querySelectorAll('.task');
    let deleteBtn = list[list.length - 1].querySelector('.task__remove');
    deleteBtn.onclick = () => {
        let lsTasksList = JSON.parse(localStorage.getItem('tasksList'));
        let elemIndex = lsTasksList.indexOf(deleteBtn.closest('.task').querySelector('.task__title').innerText);
        lsTasksList.splice(elemIndex, 1);
        localStorage.setItem('tasksList', JSON.stringify(lsTasksList));
        deleteBtn.closest('.task').remove();
    };
};

if (localStorage.getItem('tasksList')) {
    const storageElems = JSON.parse(localStorage.getItem('tasksList'));
    for (let i = 0; i < storageElems.length; i++) {
        addTask(taskList, storageElems[i]);
    };
};

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = taskForm.querySelector('.tasks__input');
    let lsItem = undefined;

    if (input.value.trim()) {
        addTask(taskList, input.value.trim());
        if (localStorage.getItem('tasksList')) {
            lsItem = JSON.parse(localStorage.getItem('tasksList'));
            lsItem.push(input.value.trim());
            localStorage.setItem('tasksList', JSON.stringify(lsItem));
        } else {
            lsItem = [input.value.trim()];
            localStorage.setItem('tasksList', JSON.stringify(lsItem));
        };
    };

    input.value = '';
});