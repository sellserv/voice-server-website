document.addEventListener('DOMContentLoaded', () => {
  // Scroll effect for floating navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'var(--glass-bg-heavy)';
      navbar.style.top = '12px';
      navbar.style.padding = '0 8px';
    } else {
      navbar.style.background = 'rgba(20, 20, 35, 0.6)';
      navbar.style.top = '24px';
      navbar.style.padding = '0';
    }
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Scroll reveal via Intersection Observer
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  } else {
    // If reduced motion, show everything immediately
    reveals.forEach(el => el.classList.add('visible'));
  }
});
