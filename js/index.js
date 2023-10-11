let dropdows = document.querySelectorAll('.dropdown');
let down = document.querySelectorAll('.down')

dropdows.forEach(item => {
    item.addEventListener('click', () => {
        down.forEach(i => {
            i.classList.toggle('show')
        })
    })
})