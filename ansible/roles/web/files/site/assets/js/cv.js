// Animation des skill badges au survol
document.querySelectorAll('.skill-badge').forEach(badge => {
  badge.addEventListener('mouseenter', function() {
    this.style.color = 'var(--bg)';
  });
  badge.addEventListener('mouseleave', function() {
    this.style.color = 'var(--text)';
  });
});

// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.cv-section').forEach(section => {
  observer.observe(section);
});
