document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const totalSlides = slideImages.length;
    let slideIndex = 0;

    const showSlide = (index) => {
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextSlide = () => {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    };

    const prevSlide = () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    };
    
    let slideInterval = setInterval(nextSlide, 5000);

    
    document.querySelector('.slider').addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    document.querySelector('.slider').addEventListener('mouseout', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    
    const prevButton = document.createElement('button');
    prevButton.textContent = '◀';
    prevButton.classList.add('prev');
    document.querySelector('.slider').appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = '▶';
    nextButton.classList.add('next');
    document.querySelector('.slider').appendChild(nextButton);

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
