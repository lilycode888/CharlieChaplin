const filmItems = document.querySelectorAll('.film')

const filmInfo = document.querySelectorAll('.film-info')

const filmContent = document.querySelector('.film-content')

// hover and show film info
filmItems.forEach((film, ind) => {
    film.addEventListener('mouseover', () => {
        filmInfo[ind].classList.add('show')
    })

    film.addEventListener('mouseleave', () => {
        filmInfo[ind].classList.remove('show')
    })
})


document.addEventListener('DOMContentLoaded', () => {
    filmContent.classList.add('show')
    console.log('test')
})
