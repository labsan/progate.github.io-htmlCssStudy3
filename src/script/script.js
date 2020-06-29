function toggle() {

    const menuList = document.getElementById('menu-list')
    const iconBar = document.getElementById('icon')

    if (menuList.style.display === 'none') {
        menuList.style.display = 'block'
        iconBar.style.color = '#2E9079'
    } else {
        menuList.style.display = 'none'
        iconBar.style.color = '#fff'
    }

}
