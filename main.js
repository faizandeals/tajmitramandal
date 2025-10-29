/* Navigation toggle */
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('open');
}

/* Auto-update footer year */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* Smooth scrolling for navigation links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});