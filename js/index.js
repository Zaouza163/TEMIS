let burgerBtn = document.querySelector('#burger-btn')
console.log(burgerBtn)
let burgerMenu = document.querySelector('#burger-menu')
console.log(burgerMenu)
burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('is-active')
})