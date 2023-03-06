const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__link');
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    dropdownValue.onclick = () => {
        if (dropdownList.className == 'dropdown__list dropdown__list_active') {
            dropdownList.className = 'dropdown__list';
        } else {
            dropdownList.className = 'dropdown__list dropdown__list_active';
        }
    }
    dropdownItems.forEach(item => {
        item.onclick = () => {
            dropdownValue.textContent = item.textContent;
            dropdownList.className = 'dropdown__list';
            return false
        }
    })
})