const menus = Array.from([document.querySelector('.menu_main'), document.querySelector('.menu_not-main')]);

menus.forEach(menu => {
    let subMenus = menu.querySelectorAll('.menu_sub');
    subMenus.forEach(subMenu => {
        let parent = subMenu.closest('.menu__item');
        parent.onclick = () => {
            subMenus.forEach(subMenu => subMenu.className = 'menu menu_sub');
            subMenu.className = 'menu menu_sub menu_active';
            return false
        }
    })
})
