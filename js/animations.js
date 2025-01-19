// animations.js - Specific Animations and Transitions

// Fade-In Effect for Elements
const fadeInElements = document.querySelectorAll('.fade-in');

const handleFadeIn = () => {
  fadeInElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleFadeIn);

// Slide-In Effect for Sections
const slideInSections = document.querySelectorAll('.slide-in');

const handleSlideIn = () => {
  slideInSections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleSlideIn);

// Delayed Animation for Hero Section
const heroAnimation = () => {
  const heroElements = document.querySelectorAll('.hero-animation');

  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animated');
    }, index * 300);
  });
};

window.addEventListener('load', heroAnimation);

// Bounce Effect for Call-to-Action Buttons
const bounceButtons = document.querySelectorAll('.cta-bounce');

bounceButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('bounce');
  });
  button.addEventListener('animationend', () => {
    button.classList.remove('bounce');
  });
});
