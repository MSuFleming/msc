// GSAP animations
gsap.from("#title", { y: -100, opacity: 0, duration: 1 });
gsap.from("#subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.8 });

// Menu functions
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('active');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header scroll effect
const header = document.getElementById('header');
const logoImg = document.getElementById('logo-img');

const defaultLogo = 'images/glasgow_logo.svg';
const scrolledLogo = 'images/ug-keyline.svg';

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
        logoImg.src = scrolledLogo;
    } else {
        header.classList.remove('scrolled');
        logoImg.src = defaultLogo;
    }
});
