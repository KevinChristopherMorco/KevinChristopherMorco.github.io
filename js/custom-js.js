new WOW().init();
let textArray = ['Web Developer', 'Graphic Designer', 'Programmer'];
let element = document.getElementById('typewriter-text')

let currentStringIndex = 0
let currentCharIndex = 0

// Type writer effect for span

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

// Enable sticky value on navbar oscroll

const stickyNavbar = () => {
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
}
stickyNavbar()

// Toggle work button to show and hide containers

const toggleWorkButton = () => {
    let button = document.querySelectorAll('.experience-section__button')
    let div = document.querySelectorAll('.experience-section__work-content')

    button.forEach((buttonEl, index) => {
        buttonEl.addEventListener('click', () => {
            button.forEach((btn) => {
                btn.classList.remove('experience-section__btn-group--active');
            });

            buttonEl.classList.add('experience-section__btn-group--active');

            div.forEach((divs) => {
                divs.style.display = 'none'
            })
            // Show the corresponding div based on the button's index
            div[index].style.display = 'block';
        })
    })
}

toggleWorkButton()

// Change phone navbar icon on click

const navIconEffect = () => {
    const hamburgerIcon = document.querySelectorAll('.eye-icon-container')
    const eyeIcon = document.querySelectorAll('.eye-icon-container i')
    const navListPhone = document.querySelectorAll('.navbar-header__nav-list-phone-container')
    hamburgerIcon.forEach((hamburgerEl) => {
        hamburgerEl.addEventListener('click', () => {
            eyeIcon.forEach((eyeEl) => {
                if (eyeEl.classList.contains('fa-eye-slash')) {
                    eyeEl.classList.remove('fa-eye-slash')
                    eyeEl.classList.add('fa-eye')

                } else {
                    eyeEl.classList.remove('fa-eye')
                    eyeEl.classList.add('fa-eye-slash')
                }

            })

            navListPhone.forEach((navListPhoneEl) => {
                navListPhoneEl.classList.toggle('hidden')

                if (navListPhoneEl.classList.contains('hidden')) {
                    console.log('It contains the hidden class')
                } else {
                    navListPhoneEl.style.opacity = 1
                }
            })
        })
    })
}

navIconEffect()

// Confirmation display when user clicks on a link

const alertLink = () => {
    let icon = document.querySelectorAll('.external-link')

    icon.forEach((iconEl) => {
        iconEl.addEventListener('click', (event) => {
            event.preventDefault()
            Swal.fire({
                title: 'This link will open to a new tab',
                text: "Do you want to proceed?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                customClass: {
                    cancelButton: 'custom-cancel-button',
                },
                confirmButtonText: 'Proceed',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = iconEl.getAttribute('href')

                } else {
                    event.preventDefault();
                }
            })
            // if (confirm('You are about to open this link to a new tab, proceed?') === false) {
            //     event.preventDefault();
            // }

        })
    })
}

alertLink()