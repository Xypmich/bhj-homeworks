const notebook = document.getElementById('editor');

if (localStorage.getItem('notebookStorage')) {
    notebook.innerText = localStorage.getItem('notebookStorage');
};

notebook.addEventListener('keyup', () => {
    console.log('up')
    localStorage.setItem('notebookStorage', notebook.value);
});