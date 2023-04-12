const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
    tooltip.onclick = () => {
        let position = tooltip.getBoundingClientRect();
        if (document.querySelector('.tooltip')) {
            if (document.querySelector('.tooltip').innerText == tooltip.title) {
                document.querySelector('.tooltip').remove();
                return false
            }
            document.querySelector('.tooltip').remove();
            tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${position.x}px; top: ${position.y + 20}px">${tooltip.title}</div>`);
        } else {
            tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active" style="left: ${position.x}px; top: ${position.y + 20}px">${tooltip.title}</div>`);
        };
        return false
    };
});