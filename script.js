const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;

let size = carouselSlide.clientWidth; 
const totalImages = carouselImages.length;
const animationDuration = 500; 
const autoPlayInterval = 3000; 


function moveSlide() {
    carouselSlide.style.transition = `transform ${animationDuration}ms ease-in-out`;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}


let autoSlide = setInterval(moveToNextSlide, autoPlayInterval);

function moveToNextSlide() {
    
    if (counter >= totalImages - 1) {
        counter = 0;
        
        carouselSlide.style.transition = 'none'; 
        carouselSlide.style.transform = 'translateX(0px)';
        
        
        setTimeout(() => {
            counter = 1; 
            moveSlide();
        }, 50); 
        
    } else {
        counter++;
        moveSlide();
    }
}


nextBtn.addEventListener('click', () => {
    
    clearInterval(autoSlide); 

    if (counter >= totalImages - 1) {
        
         counter = 0;
    } else {
        counter++;
    }
    moveSlide();
});

prevBtn.addEventListener('click', () => {
    
    clearInterval(autoSlide);

    if (counter <= 0) {
        
        counter = totalImages - 1;
    } else {
        counter--;
    }
    moveSlide();
});


window.addEventListener('resize', () => {
    size = carouselSlide.clientWidth;
    moveSlide();
});
