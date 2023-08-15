const navbarList = document.querySelector('.navbar-list')
const icon = document.querySelector('#icon')

    icon.addEventListener('click', Clicou)
    navbarList.addEventListener('click', Clicou)


function Clicou () {

    icon.classList.toggle('fa-xmark')
    navbarList.classList.toggle('navbar-list--show-link')

}