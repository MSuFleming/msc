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

// Map initialization
mapboxgl.accessToken = 'TOKEN'; 
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [-79.3916664997379, 43.66399514494464], // starting position
    zoom: 12 // starting zoom
});

// Add FullscreenControl
map.addControl(new mapboxgl.FullscreenControl());

// Add geocoder
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
    'top-left'
);
