const dropdown = document.getElementsByClassName("dropdown-about");
let i;


for(i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle('active');
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
}

const carouselSlide = document.querySelector('.slides')
const carouselImages = document.querySelectorAll('.slides img');

//buttons
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners

next.addEventListener('click', () => {
    carouselSlide.style.transition = 'tranform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prev.addEventListener('click', () => {
    carouselSlide.style.transition = 'tranform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})