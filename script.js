/* Garante a marca .js caso o script inline do <head> não tenha rodado */
document.documentElement.classList.add('js');

/* =========================================================
   REVELAÇÃO NO SCROLL
   ========================================================= */
(() => {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
})();

/* =========================================================
   SOMBRA DO HEADER AO ROLAR
   ========================================================= */
(() => {
  const header = document.querySelector('.header');
  if (!header) return;

  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

/* =========================================================
   LINK ATIVO CONFORME A SEÇÃO VISÍVEL
   ========================================================= */
(() => {
  const links = document.querySelectorAll('.nav_link, .mobile_link');
  const sections = document.querySelectorAll('main > section[id]');
  if (!links.length || !sections.length) return;

  const setActive = (id) => {
    links.forEach((link) =>
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
    );
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5, rootMargin: '-80px 0px -40% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
  }

  // Atualiza imediatamente ao clicar
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) setActive(href.slice(1));
    });
  });
})();

/* =========================================================
   MENU MOBILE
   ========================================================= */
(() => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  const setMenu = (open) => {
    const willOpen = open ?? !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    burger.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = willOpen ? 'hidden' : '';
  };

  burger.addEventListener('click', () => setMenu());

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) setMenu(false);
  });
})();

/* =========================================================
   FORMULÁRIO DE CONTATO (EmailJS + Toastify)
   ========================================================= */
(() => {
  if (typeof emailjs === 'undefined') return;

  emailjs.init({ publicKey: 'QEVbeODzvXSXx_Lzu' });

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.textContent : '';

  const showToast = (message, success = true) => {
    if (typeof Toastify === 'undefined') {
      alert(message);
      return;
    }
    Toastify({
      text: message,
      duration: 3500,
      close: true,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        // Sucesso em preto (monocromático); erro em vinho para leitura clara.
        background: success ? '#111111' : '#7f1d1d',
        color: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
      },
    }).showToast();
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    try {
      await emailjs.sendForm('service_nkk0ca4', 'template_kr0r8xn', form);
      showToast('Mensagem enviada com sucesso!', true);
      form.reset();
    } catch (error) {
      console.error(error);
      showToast('Erro ao enviar a mensagem. Tente novamente.', false);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  });
})();
