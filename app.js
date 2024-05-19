const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide')
    let currentIndex = 0

    function showSlide(index) {
        const sliderWrapper = document.querySelector('.slider-wrapper')
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`
    }

    function changeSlide(direction) {
        currentIndex += direction
        if (currentIndex < 0) {
            currentIndex = slides.length - 1
        } else if (currentIndex >= slides.length) {
            currentIndex = 0
        }
        showSlide(currentIndex)
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1))
    document.querySelector('.next').addEventListener('click', () => changeSlide(1))

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            const link = slide.getAttribute('data-link')
            window.location.href = link
        })
    })

})

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'f4bbf40e'  
    const ilgiAlanlariLink = document.querySelector('.navbar__links[href="#hobilerim"]')
    const filmListesi = document.getElementById('film-listesi')

    ilgiAlanlariLink.addEventListener('click', function(event) {
        fetchFilmBilgileri()
    })

    function fetchFilmBilgileri() {
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=batman`  

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                if (data.Response === "True") {
                    filmListesi.innerHTML = ''  
                    data.Search.forEach(film => {
                        const filmDiv = document.createElement('div')
                        filmDiv.classList.add('film')
                        filmDiv.innerHTML = `
                            <h2>${film.Title}</h2>
                            <p>Yıl: ${film.Year}</p>
                            <img src="${film.Poster}" alt="${film.Title}">
                        `
                        filmListesi.appendChild(filmDiv)
                    })
                } else {
                    console.error('API error:', data.Error)
                }
            })
            .catch(error => {
                console.error('Fetch error:', error)
            })
    }
})

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar__btn a").addEventListener("click", function(event) {
        event.preventDefault()
        document.querySelector("#sign-up").scrollIntoView({ behavior: 'smooth' })
        document.querySelector(".login-container").style.display = "block"
    })
})

function validateForm() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const emailPattern = /^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/
    if (!emailPattern.test(username)) {
        alert('Kullanıcı adı geçerli bir Sakarya Üniversitesi email adresi olmalıdır.')
        return false
    }

    if (password.trim() === "") {
        alert('Şifre alanı boş geçilemez.')
        return false
    }

    return true
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Ad Soyad kontrolü
    if (name === '') {
        alert('Lütfen adınızı ve soyadınızı girin.');
        return;
    }

    // E-posta kontrolü
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return;
    }

    // Mesaj kontrolü
    if (message === '') {
        alert('Lütfen bir mesaj yazın.');
        return;
    }

    // Formu gönder
    this.submit();
});
