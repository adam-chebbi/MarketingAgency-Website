// script.js - Core JavaScript Logic

// Navbar Toggle for Mobile View
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Hero Section Animation on Load
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-section h1');
  if (heroText) {
    heroText.classList.add('animate');
  }
});

// Dynamic Year Update in Footer
const yearElement = document.querySelector('.current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Service Item Interaction
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('highlight');
  });
  item.addEventListener('mouseout', () => {
    item.classList.remove('highlight');
  });
});

// Contact Form Submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    console.log('Form submitted:', Object.fromEntries(formData.entries()));
    alert('Thank you for your message!');
    contactForm.reset();
  });
};

// Consolidated Navbar Toggle Script
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});