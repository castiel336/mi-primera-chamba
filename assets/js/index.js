
document.body.classList.add('bg-red')
document.body.classList.remove('one')


const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

btnOpen.onclick = function () {
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}


/* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Desarrollador web'],
  typeSpeed: 65,
  loop: false,
  cursorChar: '👨‍💻'
})

