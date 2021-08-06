const light = 'fas fa-sun'
const dark = 'fas fa-moon'
const toggleBtn = document.querySelector("#toggle")
toggleBtn.className = light
const toggler = document.getElementById("toggler").addEventListener('click', ()=> {
    
    if
    (toggleBtn.className === light) {
        toggleBtn.className = dark
    } else {
        toggleBtn.className = light
    }
}) 
