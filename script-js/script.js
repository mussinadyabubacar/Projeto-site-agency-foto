const navbarList = document.querySelector('.navbar-list')
const icon = document.querySelector('#icon')
const data = document.querySelector('.data')

    icon.addEventListener('click', Clicou)
    navbarList.addEventListener('click', Clicou)


function Clicou () {

    icon.classList.toggle('fa-xmark')
    navbarList.classList.toggle('navbar-list--show-link')

}

data.innerText = `${new Date().getFullYear()}.`