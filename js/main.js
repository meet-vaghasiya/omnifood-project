const yearEl = document.querySelector('.year')
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

// set current year
yearEl.textContent = new Date().getFullYear()

//make mobile navigation work
btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
})




 // event listeneres

