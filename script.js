const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  const open = nav.dataset.open === 'true';
  nav.dataset.open = String(!open);
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '78px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 24px';
  nav.style.background = '#080a0e';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid rgba(255,255,255,.1)';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.project, .lab, .about-copy, .contact-links').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.show{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
