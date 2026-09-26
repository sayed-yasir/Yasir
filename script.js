const filters = document.getElementById('filters');
if (filters) {
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const wanted = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = wanted === 'all' || card.dataset.category === wanted ? '' : 'none';
    });
  });
}
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) navToggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }}), {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const visual=document.querySelector('.hero-visual');
window.addEventListener('pointermove', e=>{if(window.innerWidth<800||!visual)return; const x=(e.clientX/window.innerWidth-.5)*8,y=(e.clientY/window.innerHeight-.5)*8;visual.style.transform=`translate(${x}px,${y}px)`});
