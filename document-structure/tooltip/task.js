const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
    tooltip.onclick = () => {
        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
            tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active">${tooltip.title}</div>`);
        } else {
            tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip tooltip_active">${tooltip.title}</div>`);
        };
        return false
    };
});