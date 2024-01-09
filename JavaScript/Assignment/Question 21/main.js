let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideCount = slides.length;

    function slide(n) {
      slides[currentSlide].classList.remove("after");
      currentSlide = (n + slideCount) % slideCount;
      slides[currentSlide].classList.add("after");

      const offset = -((currentSlide - 2) * 15);
      document.querySelector(
        ".slider"
      ).style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
      slide(currentSlide + 1);
    }

    function prevSlide() {
      slide(currentSlide - 1);
    }

    function resetInterval() {
      clearInterval(intervalId);
    }