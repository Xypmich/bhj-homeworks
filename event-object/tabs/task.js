const navBars = document.querySelectorAll('.tab__navigation');
const tabContents = document.querySelectorAll('.tab__contents');

navBars.forEach(bar => {
    let barIndex = Array.from(navBars).indexOf(bar);
    let barTabs = bar.querySelectorAll('.tab');
    barTabs.forEach(tab => {
        let tabIndex = Array.from(barTabs).indexOf(tab);
        tab.onclick = () => {
            barTabs.forEach(tab => tab.className = 'tab');
            tab.className = 'tab tab_active';
            let contents = tabContents[barIndex].querySelectorAll('.tab__content');
            contents.forEach(content => content.className = 'tab__content');
            contents[tabIndex].className = 'tab__content tab__content_active';
        }
    })

})