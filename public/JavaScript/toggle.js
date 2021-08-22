// const light = 'fas fa-sun'
// const dark = 'fas fa-moon'
// const toggleBtn = document.querySelector("#toggle");
// const headerColor = document.querySelector('header');
// const introColor = document.querySelector('.about');
// const footerColor = document.querySelector('.footer');
// const text = document.querySelectorAll('p');
// toggleBtn.className = light

// const colorChange = ()=> {
//     headerColor.classList.add('headerColors')
//     introColor.classList.add('introColor')
//     footerColor.classList.add('footerColor')
    
// }
// const colorRemove = ()=> {
//     introColor.classList.remove('introColor')
//     footerColor.classList.remove('footerColor')
//     headerColor.classList.remove('headerColors')
// }
// const toggler = document.getElementById("toggler").addEventListener('click', ()=> {
    
//     if
//     (toggleBtn.className === light) {
//         toggleBtn.className = dark
//         // headerColor.style.transition = 'background 1s ease'
//         // headerColor.style.background = '#2D2424'
        

//         for (let i = 0; i < text.length; i++) {
//             text[i].style.color = 'white';
            
//         }
//         colorChange()

//     } else {
//         toggleBtn.className = light
//         // headerColor.style.background = '#FEF7DC'
        
//         for (let i = 0; i < text.length; i++) {
//             text[i].style.color = 'black';
            
//         }
//         colorRemove()
//     }

// }) 

// Mobile Layout Scripts
const bar = document.querySelector('.fa-bars')
const darkBtn = document.querySelector('.bx-sun')
const close = document.querySelector('.fa-times')
const menuOverlay = document.querySelector('.menuOverlay')


// Menu toggle function:

bar.addEventListener('click', (e)=> {
    switch (e.target.className) {
        case 'fas fa-bars':
            bar.className = 'fas fa-times'
            menuOverlay.style.display = 'flex'
            break;
        case 'fas fa-times':
            bar.className = 'fas fa-bars'
            menuOverlay.style.display = 'none'
            break;
        default:
            break;
    } 
})

// Menu toggle function:
darkBtn.addEventListener('click', (e)=> {
    switch (e.target.className) {
        case 'bx bx-sun':
            darkBtn.className = 'bx bx-moon'
            
            break;
        case 'bx bx-moon':
            darkBtn.className = 'bx bx-sun'
            
            break;
        default:
            break;
    } 
})