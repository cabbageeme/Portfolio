// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top') as HTMLElement | null;

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Smooth scroll for "Explore My Work" button
const ctaButton = document.querySelector('.cta-button') as HTMLAnchorElement | null;

if (ctaButton) {
  ctaButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(ctaButton.getAttribute('href')!) as HTMLElement;
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  });
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.glass-nav ul li a');

if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href')!);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Navigation Bar Scroll Effect
const glassNav = document.getElementById('glass-nav');

if (glassNav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      glassNav.classList.add('scrolled');
    } else {
      glassNav.classList.remove('scrolled');
    }
  });
}

// Parallax Effect for Sections
const parallaxSections = document.querySelectorAll('section[data-parallax="true"]') as NodeListOf<HTMLElement>;

if (parallaxSections.length > 0) {
  window.addEventListener('scroll', () => {
    parallaxSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const scrollOffset = window.scrollY - rect.top; // Calculate scroll offset
      section.style.setProperty('--scroll-offset', `${scrollOffset}`);
    });
  });
}