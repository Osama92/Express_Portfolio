const light = 'fas fa-sun'
const dark = 'fas fa-moon'
const toggleBtn = document.querySelector("#toggle");
const headerColor = document.querySelector('.header');
const introColor = document.querySelector('.about');
const footerColor = document.querySelector('.footer');
const text = document.querySelectorAll('a');
toggleBtn.className = light
const toggler = document.getElementById("toggler").addEventListener('click', ()=> {
    
    if
    (toggleBtn.className === light) {
        toggleBtn.className = dark
        headerColor.style.transition = 'background 1s ease'
        headerColor.style.background = '#2D2424'
        

        for (let i = 0; i < text.length; i++) {
            text[i].style.color = 'white';
            
        }

    } else {
        toggleBtn.className = light
        headerColor.style.background = '#FEF7DC'
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = 'black';
            
        }
    }

}) 
