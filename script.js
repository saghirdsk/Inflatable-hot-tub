// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Slider for Gallery
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.gallery img');
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  // Show the current slide
  slides[index].style.display = 'block';
}

function nextSlide() {
  const slides = document.querySelectorAll('.gallery img');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll('.gallery img');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize the gallery slider
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery img');
  if (slides.length > 0) {
    showSlide(currentSlide);

    // Add navigation buttons for the slider
    const gallerySection = document.querySelector('.gallery');
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');
    nextButton.textContent = 'Next';
    prevButton.textContent = 'Previous';

    nextButton.classList.add('gallery-btn');
    prevButton.classList.add('gallery-btn');

    gallerySection.appendChild(prevButton);
    gallerySection.appendChild(nextButton);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  }
});

// Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
