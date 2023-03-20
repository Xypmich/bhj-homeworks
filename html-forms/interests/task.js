const interests = document.querySelectorAll('.interests_active');

interests.forEach(interest => {
    interest.parentElement.querySelector('.interest__check').addEventListener('change', () => {
        if (interest.parentElement.querySelector('.interest__check').checked) {
            interest.querySelectorAll('.interest__check').forEach(interest => interest.checked = true);
        } else {
            interest.querySelectorAll('.interest__check').forEach(interest => interest.checked = false);
        };
    });
});