const light = 'fas fa-sun'
const dark = 'fas fa-moon'
const toggleBtn = document.querySelector("#toggle")
const headerColor = document.querySelector('.header')
const text = document.querySelector('a')
toggleBtn.className = light
const toggler = document.getElementById("toggler").addEventListener('click', ()=> {
    
    if
    (toggleBtn.className === light) {
        toggleBtn.className = dark
        headerColor.style.background = '#2D2424'
        text.style.color = 'white'

    } else {
        toggleBtn.className = light
        headerColor.style.background = '#FEF7DC'
        text.style.color = 'black'
    }
}) 
