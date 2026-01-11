// Small JS: mobile nav toggle and dynamic year insertion
document.addEventListener('DOMContentLoaded', function(){
  // Year placeholders
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // Mobile toggles (handles multiple pages)
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    const targetId = btn.getAttribute('aria-controls');
    const nav = targetId ? document.getElementById(targetId) : null;
    btn.addEventListener('click', function(){
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav){
        const shown = nav.style.display === 'block';
        nav.style.display = shown ? '' : 'block';
      }
    });
  });

  // Simple contact form client-side validation (enhance as needed)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      // Basic required check (HTML required attributes cover this)
      // You could hook analytics or show success UI here.
    });
  }
});