const article = document.querySelector('.article')
const navBar = document.querySelector('.nav-bar')


document.addEventListener('DOMContentLoaded', () => {
    article.classList.add('show-article')
})

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        navBar.classList.add('side')
    }

})