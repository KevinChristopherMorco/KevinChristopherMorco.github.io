new WOW().init();
let textArray = ['Web Developer', 'Graphic Designer', 'Programmer'];
let element = document.getElementById('typewriter-text')

let currentStringIndex = 0
let currentCharIndex = 0

let typeWriter = () => {
    let currentString = textArray[currentStringIndex]
    if (currentCharIndex < currentString.length) {
        element.innerHTML += currentString[currentCharIndex]
        currentCharIndex++
        setTimeout(typeWriter, 200)

    } else {
        currentStringIndex++
        currentCharIndex = 0
        element.innerHTML = ' '
        if (currentStringIndex < textArray.length) {
            setTimeout(typeWriter, 300);
        }
    }

    if (currentStringIndex >= textArray.length) {
        currentStringIndex = 0
        setTimeout(typeWriter, 1000)

    }
}

typeWriter();

const navbar = document.getElementById('navbar');
let scroll = 0
window.addEventListener('scroll', () => {
    scroll = window.scrollY
    if (scroll > 1) {
        navbar.classList.add('navbar-sticky')

    } else {
        navbar.classList.remove('navbar-sticky')

    }
});

let button = document.querySelectorAll('.exp-button')
let div = document.querySelectorAll('.experience-div')

button.forEach((buttonEl, index) =>{
buttonEl.addEventListener('click', () => {
    button.forEach((btn) => {
        btn.classList.remove('clicked');
    });

    // Add the "clicked" class to the clicked button
    buttonEl.classList.add('btn-click');
    buttonEl.classList.add('clicked');

    div.forEach((divs) => {
        divs.style.display = 'none'
    })
    // Show the corresponding div based on the button's index
    div[index].style.display = 'block';
})
})
