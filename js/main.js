const yearEl = document.querySelector('.year')
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
const body = document.querySelector('body')



// set current year
yearEl.textContent = new Date().getFullYear()

//make mobile navigation work
btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
})

// stickey navigation

const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function (entires) {
    const ent = entires[0]

    if (ent.isIntersecting === false) {
        body.classList.add('stickey')
    } else {
        body.classList.remove('stickey')

    }

}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
})

obs.observe(sectionHeroEl)




 // event listeneres

