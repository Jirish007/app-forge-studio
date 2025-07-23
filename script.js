// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
// Form submission alert
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thanks! We'll reach out soon to help build your app.");
  this.reset();
});
