const sizeList = document.querySelectorAll('.font-size');

sizeList.forEach(size => {
    size.onclick = () => {
        sizeList.forEach(size => {size.classList.remove('font-size_active')});
        size.classList.add('font-size_active');
        console.log('action');
        if (size.classList.contains('font-size_small')) {
            size.closest('.book').classList = 'book';
            size.closest('.book').classList.add('book_fs-small');
            console.log('action');
        } else if (size.classList.contains('font-size_big')) {
            size.closest('.book').classList = 'book';
            size.closest('.book').classList.add('book_fs-big');
            console.log('action');
        } else {
            size.closest('.book').classList = 'book';
            console.log('action');
        }
        return false
    }
})