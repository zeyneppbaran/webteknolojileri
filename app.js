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