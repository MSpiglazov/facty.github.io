const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function(){
  burger.classList.toggle('active')
  nav.classList.toggle('active-nav__block')
  
})