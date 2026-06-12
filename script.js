const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

function observeAll(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    revealObserver.observe(el);
  });
}

observeAll(".skills_banners_tec");
observeAll(".about-me_banner p");
observeAll(".projects_banners_img_left");
observeAll(".projects_banners_img_right");
observeAll(".projects_banner_element");





const navLinks = document.querySelectorAll(".header_nav a");
const sections = document.querySelectorAll("section[id]");

const menuObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const currentId = entry.target.id;

            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach((section) => menuObserver.observe(section));


navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});






emailjs.init({
    publicKey: "QEVbeODzvXSXx_Lzu"
});

const form = document.getElementById("contact-form");
const submitBtn = form.querySelector('button[type="submit"]');
const originalBtnText = submitBtn.textContent;

function showToast(message, success = true) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: success ? "#16a34a" : "#dc2626",
            color: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }
    }).showToast();
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    try {
        await emailjs.sendForm(
            "service_nkk0ca4",
            "template_kr0r8xn",
            form
        );

        showToast("Mensagem enviada com sucesso!", true);
        form.reset();
    } catch (error) {
        console.error(error);
        showToast("Erro ao enviar a mensagem. Tente novamente.", false);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});


function menuShow() {
    const menuMobile = document.querySelector('.mobile_menu');
    const icon = document.querySelector('.icon');

    menuMobile.classList.toggle('open');

    if (menuMobile.classList.contains('open')) {
        icon.src = "img/close_white_36dp.svg";
    } else {
        icon.src = "img/menu_white_36dp.svg";
    }
}