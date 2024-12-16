// script.js

// GSAP animations
gsap.from(".hero-content h1", { duration: 1, opacity: 0, y: -50 });
gsap.from(".hero-content p", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
gsap.from(".btn", { duration: 1, opacity: 0, scale: 0.8, delay: 1 });
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Example contact form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    alert('Your message has been sent successfully!');
    this.reset(); // Reset the form fields
  });
    