// tutorial von Kevin Powell https://www.youtube.com/watch?v=gBzsE0oieio&ab_channel=KevinPowell

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// slides nebeneinander bringen
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}
slides.forEach(setSlidePosition);

// diese hilfsfunktion fasst alles zusammen, was geschehen soll wenn auf einen der button geklickt wird
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// wenn ich den linken button klicke, sollen die slides nach links
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide)
})

// wenn ich den rechten button klicke, sollen die slides nach rechts
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
})

// wenn die nav indicators geklickt werden, soll zu dem slide gewechselt werden

dotsNav.addEventListener('click', e => {
    // welcher indicator wurde geklickt?
    const targetDot = e.target.closest('button');
    
    if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide  = slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide)
})
