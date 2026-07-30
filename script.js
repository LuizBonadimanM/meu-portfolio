document.documentElement.classList.add('js');

const I18N = {
  pt: {
    'nav.about': 'Sobre mim',
    'nav.tec': 'Tecnologias',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.cv': 'Currículo',
    'hero.eyebrow': 'Olá, eu sou',
    'hero.lead':
      '<span class="mark">Desenvolvedor Front-End</span> focado em criar interfaces modernas, responsivas e intuitivas.',
    'hero.text':
      'Atualmente estudando e aprimorando minhas habilidades com <span class="mark">HTML, CSS e JavaScript</span>, buscando sempre desenvolver experiências limpas, funcionais e agradáveis para o usuário.',
    'hero.cta1': 'Ver projetos',
    'hero.cta2': 'Entrar em contato',
    'about.title': 'Sobre <span class="spanh2">Mim</span>',
    'about.p1':
      'Sou estudante e desenvolvedor em formação, apaixonado por tecnologia e pela criação de soluções digitais. Tenho dedicado meu tempo ao aprendizado de desenvolvimento web, buscando aprimorar constantemente minhas habilidades técnicas e práticas.',
    'about.p2':
      'Atualmente estudo HTML, CSS, JavaScript e conceitos de desenvolvimento de software, criando projetos próprios para colocar em prática os conhecimentos adquiridos e desenvolver experiências modernas e funcionais para os usuários.',
    'about.p3':
      'Valorizo a organização, a atenção aos detalhes e o aprendizado contínuo. Acredito que cada projeto é uma oportunidade de evoluir tecnicamente e entregar resultados cada vez melhores.',
    'about.p4':
      'Meu objetivo é construir uma carreira sólida na área de tecnologia, participando de projetos desafiadores e contribuindo com soluções criativas e eficientes para empresas e pessoas.',
    'skills.title': 'Minhas <span class="spanh2">Tecnologias</span>',
    'projects.title': 'Meus <span class="spanh2">Projetos</span>',
    'projects.desc':
      'Site institucional desenvolvido para apresentar a marca, seus produtos e soluções de forma clara e organizada. O projeto conta com catálogo de produtos, área de contato, informações institucionais e uma ferramenta para localizar revendedores próximos, proporcionando uma navegação intuitiva e uma experiência responsiva em diferentes dispositivos.',
    'projects.more': 'Veja mais',
    'contact.title': 'Vamos <span class="spanh2">conversar!</span>',
    'contact.p1':
      'Estou construindo minha trajetória como <span class="mark">Desenvolvedor Front-End</span> e sempre aberto a novas oportunidades, projetos e conexões na área de tecnologia.',
    'contact.p2':
      'Se você tem uma ideia, uma proposta ou simplesmente deseja trocar experiências, ficarei feliz em receber sua mensagem.',
    'contact.name': 'Seu nome',
    'contact.email': 'Email',
    'contact.subject': 'Assunto',
    'contact.message': 'Como posso te ajudar?',
    'contact.send': 'Enviar mensagem',
    'contact.sending': 'Enviando...',
    'toast.success': 'Mensagem enviada com sucesso!',
    'toast.error': 'Erro ao enviar a mensagem. Tente novamente.',
    'footer.role': 'Desenvolvedor Front-End',
    'footer.rights': 'Todos os direitos reservados.',
    'aria.theme': 'Alternar tema',
    'aria.lang': 'Mudar idioma',
    'aria.logo': 'Ir para o início',
    'aria.scroll': 'Rolar para baixo',
    'aria.menuOpen': 'Abrir menu',
    'aria.menuClose': 'Fechar menu'
  },
  en: {
    'nav.about': 'About me',
    'nav.tec': 'Technologies',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'hero.eyebrow': 'Hi, I\'m',
    'hero.lead':
      '<span class="mark">Front-End Developer</span> focused on creating modern, responsive and intuitive interfaces.',
    'hero.text':
      'Currently studying and improving my skills with <span class="mark">HTML, CSS and JavaScript</span>, always aiming to build clean, functional and pleasant experiences for the user.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Get in touch',
    'about.title': 'About <span class="spanh2">Me</span>',
    'about.p1':
      'I\'m a student and developer in training, passionate about technology and about creating digital solutions. I have dedicated my time to learning web development, constantly seeking to improve my technical and practical skills.',
    'about.p2':
      'I currently study HTML, CSS, JavaScript and software development concepts, building my own projects to put into practice the knowledge I acquire and to create modern, functional experiences for users.',
    'about.p3':
      'I value organization, attention to detail and continuous learning. I believe every project is an opportunity to grow technically and deliver ever better results.',
    'about.p4':
      'My goal is to build a solid career in technology, taking part in challenging projects and contributing creative, efficient solutions for companies and people.',
    'skills.title': 'My <span class="spanh2">Technologies</span>',
    'projects.title': 'My <span class="spanh2">Projects</span>',
    'projects.desc':
      'Institutional website developed to present the brand, its products and solutions in a clear and organized way. The project features a product catalog, a contact area, institutional information and a tool to locate nearby dealers, providing intuitive navigation and a responsive experience across different devices.',
    'projects.more': 'See more',
    'contact.title': 'Let\'s <span class="spanh2">talk!</span>',
    'contact.p1':
      'I am building my path as a <span class="mark">Front-End Developer</span> and I am always open to new opportunities, projects and connections in the technology field.',
    'contact.p2':
      'If you have an idea, a proposal or simply want to exchange experiences, I will be happy to receive your message.',
    'contact.name': 'Your name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'How can I help you?',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'toast.success': 'Message sent successfully!',
    'toast.error': 'Error sending the message. Please try again.',
    'footer.role': 'Front-End Developer',
    'footer.rights': 'All rights reserved.',
    'aria.theme': 'Toggle theme',
    'aria.lang': 'Change language',
    'aria.logo': 'Go to top',
    'aria.scroll': 'Scroll down',
    'aria.menuOpen': 'Open menu',
    'aria.menuClose': 'Close menu'
  }
};

let currentLang = 'pt';

const store = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      return;
    }
  }
};

const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');

function applyTheme(theme, persist) {
  const isDark = theme === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  if (persist) store.set('theme', isDark ? 'dark' : 'light');
}

function applyLang(lang, persist) {
  currentLang = lang === 'en' ? 'en' : 'pt';
  const dict = I18N[currentLang];
  document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'pt-br');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  const code = langToggle && langToggle.querySelector('.lang_code');
  if (code) code.textContent = currentLang.toUpperCase();

  if (burger) {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-label', dict[open ? 'aria.menuClose' : 'aria.menuOpen']);
  }

  if (persist) store.set('lang', currentLang);
}

(() => {
  const saved = store.get('theme');
  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'), false);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next =
        document.documentElement.getAttribute('data-theme') === 'dark'
          ? 'light'
          : 'dark';
      applyTheme(next, true);
    });
  }
})();

(() => {
  const saved = store.get('lang');
  applyLang(saved === 'en' ? 'en' : 'pt', false);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'pt' : 'en', true);
    });
  }
})();

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

(() => {
  const header = document.querySelector('.header');
  if (!header) return;

  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

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

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) setActive(href.slice(1));
    });
  });
})();

(() => {
  if (!burger || !menu) return;

  const setMenu = (open) => {
    const willOpen = open ?? !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    burger.setAttribute(
      'aria-label',
      I18N[currentLang][willOpen ? 'aria.menuClose' : 'aria.menuOpen']
    );
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

(() => {
  if (typeof emailjs === 'undefined') return;

  emailjs.init({ publicKey: 'QEVbeODzvXSXx_Lzu' });

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

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
        background: success ? '#111111' : '#7f1d1d',
        color: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.18)'
      }
    }).showToast();
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = I18N[currentLang]['contact.sending'];
    }

    try {
      await emailjs.sendForm('service_nkk0ca4', 'template_kr0r8xn', form);
      showToast(I18N[currentLang]['toast.success'], true);
      form.reset();
    } catch (error) {
      console.error(error);
      showToast(I18N[currentLang]['toast.error'], false);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = I18N[currentLang]['contact.send'];
      }
    }
  });
})();