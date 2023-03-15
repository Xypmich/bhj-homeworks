const revealsList = document.querySelectorAll('.reveal');

window.onscroll = () => {
    revealsList.forEach(reveal => {
        let {top, bottom} = reveal.getBoundingClientRect();
        let topVisible = 0 < top && top < window.innerHeight;
        let bottomVisible = 0 < bottom && bottom < window.innerHeight;
        if (reveal.classList.contains('reveal_active') && (topVisible || bottomVisible)) {
            return
        } else if (reveal.classList.contains('reveal_active') && !(topVisible || bottomVisible)) {
            reveal.classList.remove('reveal_active');
        } else if (topVisible || bottomVisible) {
            reveal.classList.add('reveal_active');
        }
    })
}