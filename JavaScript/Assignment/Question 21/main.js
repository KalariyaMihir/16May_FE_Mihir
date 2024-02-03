let slides = document.querySelectorAll(".slide");
let currentSlide = 5;
const slideCount = slides.length;

// slide function for slides
function slide(n) {

  // remove class from current slide
  slides[currentSlide].classList.remove("after");
  
  // for slide index
  if (n < 0)
    n = slideCount - 1;
  else if (n == slideCount)
    n = 0;

  currentSlide = n;

  // add class to new current slide
  slides[currentSlide].classList.add("after");

  let offset = -((currentSlide - 5) * 7);
  if (offset > 35) {
    offset = -35;
  }
  else if (offset < -35) {
    offset = 35;
  }
  console.log(offset);
  document.querySelector(
    ".slider"
  ).style.transform = `translateX(${offset}%)`;

  // change image in box 
  let img = document.querySelector('.box img');
  img.src = slides[currentSlide].src;
}

// function for slide next and previous
function nextSlide() {
  slide(currentSlide + 1);
}

function prevSlide() {
  slide(currentSlide - 1);
}
