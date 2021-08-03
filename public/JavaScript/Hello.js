const greetings = ['Hello', 'Salam', 'Hola', 'Ciao', 'Bonjour', 'Nǐn hǎo','Konnichiwa','Olá',]
const greetLenght = greetings.length
const greetIndex = 0
var timer = 0
const message = document.querySelector('.greet')

// const greet = greetings[Math.floor(Math.random()*lenght)]
// var greet = greetings[greetIndex++ % greetLenght];

//         setInterval(() => {
//             // message.innerHTML = greet
//             console.log(greet)
//         }, 1000);

function changeGreet() {
    for (let i = 0; i < greetLenght; i++ ) {
        setTimeout(() => {
            message.innerHTML = greetings[i]
        }, timer);
        timer = timer + 1500;
    }
}

setInterval(() => {
    changeGreet();
}, 100);