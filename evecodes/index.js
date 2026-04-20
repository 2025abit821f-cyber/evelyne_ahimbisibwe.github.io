const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.getElementById('slides');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dotsContainer = document.getElementById('dots');
    
    let currentIndex = 0;
    let autoPlayInterval;


    slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

    function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

    function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    }

    function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    }

    
    nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
    });


    document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    });


    function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
    }


    startAutoPlay();