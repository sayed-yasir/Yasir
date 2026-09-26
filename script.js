document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const filters = document.getElementById("filters");
  const cards = [...document.querySelectorAll(".project-card")];
  const empty = document.getElementById("emptyState");
  const toast = document.getElementById("toast");

  toggle?.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav?.classList.remove("open")));

  filters?.addEventListener("click", e => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    const wanted = btn.dataset.filter;
    let count = 0;
    cards.forEach(card => {
      const show = wanted === "all" || card.dataset.category === wanted;
      card.classList.toggle("hidden", !show);
      if (show) count++;
    });
    empty.classList.toggle("show", count === 0);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const visual = document.querySelector(".hero-visual");
  window.addEventListener("pointermove", e => {
    if (!visual || innerWidth < 800) return;
    const x = (e.clientX / innerWidth - .5) * 8;
    const y = (e.clientY / innerHeight - .5) * 8;
    visual.style.transform = `translate(${x}px,${y}px)`;
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    });
  });

  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    a.addEventListener("click", () => {
      toast.textContent = "در حال باز کردن لینک...";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1200);
    });
  });
});