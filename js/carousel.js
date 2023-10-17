        const carouselSlide = document.querySelector('.carousel-slide');
        const carouselVideos = document.querySelectorAll('.carousel-video');

        let counter = 1;
        const videoWidth = carouselVideos[0].clientWidth;

        carouselSlide.style.transform = `translateX(${-videoWidth * counter}px)`;

        setInterval(() => {
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
            counter++;
            carouselSlide.style.transform = `translateX(${-videoWidth * counter}px)`;
        }, 3000);