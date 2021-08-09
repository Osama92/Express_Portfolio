const light = 'fas fa-sun'
const dark = 'fas fa-moon'
const toggleBtn = document.querySelector("#toggle");
const headerColor = document.querySelector('.header');
const introColor = document.querySelector('.about');
const footerColor = document.querySelector('.footer');
const text = document.querySelectorAll('a');
toggleBtn.className = light

const colorChange = ()=> {
    introColor.classList.add('introColor')
    footerColor.classList.add('footerColor')
    
}
const colorRemove = ()=> {
    introColor.classList.remove('introColor')
    footerColor.classList.remove('footerColor')
}
const toggler = document.getElementById("toggler").addEventListener('click', ()=> {
    
    if
    (toggleBtn.className === light) {
        toggleBtn.className = dark
        headerColor.style.transition = 'background 1s ease'
        headerColor.style.background = '#2D2424'
        colorChange()
        

        for (let i = 0; i < text.length; i++) {
            text[i].style.color = 'white';
            
        }

    } else {
        toggleBtn.className = light
        headerColor.style.background = '#FEF7DC'
        colorRemove()
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = 'black';
            
        }
    }

}) 
