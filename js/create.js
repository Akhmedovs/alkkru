const done = document.querySelector('.done')
const gal = document.querySelector('.gal')

done.addEventListener('click', () => {
    gal.classList.toggle('show')
})