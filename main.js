// Header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile nav
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Quote form -> WhatsApp handoff
  const form = document.getElementById('quoteForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ad = document.getElementById('adSoyad').value.trim();
    const tel = document.getElementById('telefon').value.trim();
    const hizmet = document.getElementById('hizmet').value;
    const mesaj = document.getElementById('mesaj').value.trim();

    if (!ad || !tel) {
      status.textContent = 'Lütfen ad soyad ve telefon bilgilerinizi girin.';
      status.classList.remove('ok');
      return;
    }

    const text = `Merhaba, Diamond Halı Yıkama'dan teklif almak istiyorum.%0A%0AAd Soyad: ${encodeURIComponent(ad)}%0ATelefon: ${encodeURIComponent(tel)}%0AHizmet: ${encodeURIComponent(hizmet)}%0AMesaj: ${encodeURIComponent(mesaj || '-')}`;
    window.open(`https://wa.me/905476044747?text=${text}`, '_blank');

    status.textContent = 'Talebiniz WhatsApp\'a yönlendiriliyor...';
    status.classList.add('ok');
    form.reset();
  });