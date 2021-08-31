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


// for smooth scrolling

const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function (link) {
    link.addEventListener('click', function (el) {
        el.preventDefault()
        const href = link.getAttribute('href')
        console.log(href)
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        //scroll to other links
        if (href !== '#' && href.startsWith('#')) {

            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({
                behavior: 'smooth'
            })
        }

        // close mobile views
        if (link.classList.contains('main-nav-link')) {
            headerEl.classList.toggle('nav-open')
        }

    })

})




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// paste below code for adding class in body

function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();




