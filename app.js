const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')

//Display Mobile Menu
const mobileMenu=()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);

/*document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            const link = slide.getAttribute('data-link');
            window.location.href = link;
        });
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            const link = slide.getAttribute('data-link');
            window.location.href = link;
        });
    });

    /*slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            const link = slide.getAttribute('data-link');
            window.location.href = link;
        });
    });*/

    // Otomatik geçiş için (isteğe bağlı)
    /*setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); // 3 saniyede bir geçiş*/
});
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'f4bbf40e';  // Buraya kendi API anahtarınızı yazın
    const ilgiAlanlariLink = document.querySelector('.navbar__links[href="#hobilerim"]');
    const filmListesi = document.getElementById('film-listesi');

    ilgiAlanlariLink.addEventListener('click', function(event) {
        fetchFilmBilgileri();
    });

    function fetchFilmBilgileri() {
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=batman`;  // Burada "batman" anahtar kelimesiyle arama yapılıyor, istediğiniz anahtar kelimeyi kullanabilirsiniz

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ağ yanıtı düzgün değil');
                }
                return response.json();
            })
            .then(data => {
                if (data.Response === "True") {
                    filmListesi.innerHTML = '';  // Mevcut içerikleri temizle
                    data.Search.forEach(film => {
                        const filmDiv = document.createElement('div');
                        filmDiv.classList.add('film');
                        filmDiv.innerHTML = `
                            <h2>${film.Title}</h2>
                            <p>Yıl: ${film.Year}</p>
                            <img src="${film.Poster}" alt="${film.Title}">
                        `;
                        filmListesi.appendChild(filmDiv);
                    });
                } else {
                    console.error('API hatası:', data.Error);
                }
            })
            .catch(error => {
                console.error('Fetch hatası:', error);
            });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".navbar__btn a").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(".login-container").style.display = "block";
    });
});

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kullanıcı adının email formatında olup olmadığını kontrol et
    const emailPattern = /^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/;
    if (!emailPattern.test(username)) {
        alert('Kullanıcı adı geçerli bir Sakarya Üniversitesi email adresi olmalıdır.');
        return false;
    }

    // Şifrenin boş olup olmadığını kontrol et
    if (password.trim() === "") {
        alert('Şifre alanı boş geçilemez.');
        return false;
    }

    return true;
}