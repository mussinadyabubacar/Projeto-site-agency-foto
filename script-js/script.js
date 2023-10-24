const btn = document.querySelector('.navbar-header_toggle')
const icon = document.querySelector('#icon')
const navbarList = document.querySelector('.navbar-list')
const data = document.querySelector('.data')

btn.addEventListener('click', () => {

    icon.classList.toggle('fa-xmark');
    navbarList.classList.toggle('navbar-list--show-link');

})

data.innerText = `${new Date().getFullYear()}.`