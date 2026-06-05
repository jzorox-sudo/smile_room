/**
 * SMILE ROOM — main.js
 * Clínica Dental Dr. Juan Atondo · Los Mochis, Sinaloa
 *
 * Modules (all self-contained IIFEs except the 4 global helpers
 * that HTML onclick= attributes need):
 *
 *  1. Scroll Reveal        — IntersectionObserver fades sections in
 *  2. Typewriter Effect    — cycles phrases in the hero label
 *  3. Before/After Slider  — syncs clip-path with range input
 *  4. FAQ Accordion        — one panel open at a time (max-height)
 *  5. Modal (open/close)   — appointment booking modal + ESC key
 *  6. WhatsApp Sender      — builds prefilled wa.me URL from form
 *  7. Navbar on Scroll     — adds .scrolled class after 10 px
 *  8. Mobile Menu Toggle   — hamburger open/close
 */

/* ─────────────────────────────────────────────────────────────
   1. SCROLL REVEAL
   Adds `.active` to every .reveal element as it enters the
   viewport. Threshold 0.1 = fire when 10 % of element is visible.
───────────────────────────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}());

/* ─────────────────────────────────────────────────────────────
   2. TYPEWRITER EFFECT
   Cycles through `phrases` — typing at 100 ms/char,
   pausing 2 s, then erasing at 50 ms/char, pausing 500 ms.
───────────────────────────────────────────────────────────── */
(function initTypewriter() {
  const phrases = [
    'Tu sonrisa merece lo mejor',
    'Confianza desde la primera cita',
    'Especialistas en tu sonrisa',
  ];

  const target = document.getElementById('typewriter');
  if (!target) return;

  let phraseIdx = 0;
  let charIdx = 0;

  function type() {
    if (charIdx < phrases[phraseIdx].length) {
      target.textContent += phrases[phraseIdx].charAt(charIdx);
      charIdx++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIdx > 0) {
      target.textContent = phrases[phraseIdx].substring(0, charIdx - 1);
      charIdx--;
      setTimeout(erase, 50);
    } else {
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  type();
}());

/* ─────────────────────────────────────────────────────────────
   3. BEFORE / AFTER SLIDER
   Called via oninput="handleSlider(this)" on each range input.
   Moves the white divider line and updates the clip-path on the
   "after" image so the user can drag to compare.
───────────────────────────────────────────────────────────── */
// Exposed globally — called from inline oninput on <input> elements
window.handleSlider = function handleSlider(input) {
  const container = input.closest('.before-after-slider');
  const handle = container.querySelector('.slider-handle');
  const afterImage = container.querySelector('.after-image');
  const val = input.value; // 0–100

  handle.style.left = `${val}%`;
  afterImage.style.clipPath = `inset(0 0 0 ${val}%)`;
};

/* ─────────────────────────────────────────────────────────────
   4. FAQ ACCORDION
   Called via onclick="toggleFaq(this)" on each button.
   Uses max-height transition so CSS handles the animation
   without needing to know the exact height up-front.
───────────────────────────────────────────────────────────── */
window.toggleFaq = function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.material-symbols-outlined');

  // Determine current state BEFORE collapsing everything
  const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

  // Close all panels
  document.querySelectorAll('#faq .overflow-hidden').forEach((el) => {
    el.style.maxHeight = '0px';
  });
  document.querySelectorAll('#faq .material-symbols-outlined').forEach((el) => {
    el.style.transform = 'rotate(0deg)';
  });

  // Re-open the clicked one (if it was closed)
  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
};

/* ─────────────────────────────────────────────────────────────
   5. MODAL — APPOINTMENT BOOKING
   openModal / closeModal are global so navbar button, hero
   button, doctor section button etc. can all call them from
   onclick= attributes without any extra wiring.

   Accessibility:
   - body scroll locked while open
   - ESC key closes
   - overlay click closes
───────────────────────────────────────────────────────────── */
window.openModal = function openModal() {
  const modal = document.getElementById('modal-cita');
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Move focus to the first input for keyboard users
  const firstInput = modal.querySelector('input, select, button');
  if (firstInput) firstInput.focus();

  // Enforce numeric-only phone input (exactly 10 digits) and toggle button state
  const phoneInput = document.getElementById('phone');
  const submitBtn = document.querySelector('#appointmentForm button');

  const updateButtonState = () => {
    if (submitBtn) {
      const isPhoneValid = phoneInput.value.length === 10;
      submitBtn.disabled = !isPhoneValid;
      submitBtn.classList.toggle('opacity-50', !isPhoneValid);
      submitBtn.classList.toggle('cursor-not-allowed', !isPhoneValid);
    }
  };

  if (phoneInput) {
    const onPhoneInput = () => {
      phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '').slice(0, 10);
      updateButtonState();
    };
    phoneInput.removeEventListener('input', onPhoneInput);
    phoneInput.addEventListener('input', onPhoneInput);

    // Initial state
    updateButtonState();
  }

  // Configure date input: disallow past dates and block Sundays
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;

    // If a prefilled date is before today, clear it
    if (dateInput.value && dateInput.value < dateInput.min) dateInput.value = '';

    // Set default to tomorrow (skip Sunday -> use Monday)
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    const tY = tomorrow.getFullYear();
    const tM = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const tD = String(tomorrow.getDate()).padStart(2, '0');
    const tomorrowStr = `${tY}-${tM}-${tD}`;
    if (!dateInput.value) dateInput.value = tomorrowStr;

    // Block Sundays and show validation message
    const onDateChange = () => {
      if (!dateInput.value) {
        dateInput.setCustomValidity('');
        return;
      }
      const d = new Date(dateInput.value + 'T00:00');
      if (d.getDay() === 0) {
        dateInput.setCustomValidity('No se aceptan citas los domingos.');
        dateInput.reportValidity();
        dateInput.value = '';
      } else if (dateInput.value < dateInput.min) {
        dateInput.setCustomValidity('La fecha no puede ser anterior al día de hoy.');
        dateInput.reportValidity();
        dateInput.value = '';
      } else {
        dateInput.setCustomValidity('');
      }
    };

    dateInput.removeEventListener('change', onDateChange);
    dateInput.addEventListener('change', onDateChange);
  }

  // Set default time (08:30) on time select dropdown
  const timeInput = document.getElementById('time');
  if (timeInput && !timeInput.value) {
    timeInput.value = '09:00';
  }
};

window.closeModal = function closeModal() {
  const modal = document.getElementById('modal-cita');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
};

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeModal();
});

/* ─────────────────────────────────────────────────────────────
   6. WHATSAPP SENDER
   Reads the appointment form, builds a human-readable message,
   and opens wa.me in a new tab. No backend required.

   ⚠️  Replace the placeholder number before going live:
       Search for WHATSAPP_NUMBER and set your real digits.
───────────────────────────────────────────────────────────── */
// ← Replace with real WhatsApp number (digits only, incl. country code)
const WHATSAPP_NUMBER = '526681873390'; // TODO: update before launch

window.sendWhatsApp = function sendWhatsApp() {
  const name = (document.getElementById('name')?.value || '').trim();
  const phone = (document.getElementById('phone')?.value || '').trim();
  const service = (document.getElementById('service')?.value || '').trim();
  const date = (document.getElementById('date')?.value || '').trim();
  const time = (document.getElementById('time')?.value || '').trim();

  // Basic validation
  if (!name || !phone) {
    alert('Por favor ingresa tu nombre y teléfono para continuar.');
    return;
  }

  // Validate phone is numeric and exactly 10 digits
  if (!/^\d+$/.test(phone)) {
    alert('El teléfono debe contener solo números.');
    return;
  }

  if (phone.length !== 10) {
    alert('El teléfono debe tener exactamente 10 dígitos.');
    return;
  }

  // Validate date and time inputs if provided
  const dateInput = document.getElementById('date');
  if (date && dateInput && !dateInput.checkValidity()) {
    alert(dateInput.validationMessage || 'La fecha seleccionada no es válida.');
    return;
  }

  const timeInput = document.getElementById('time');
  if (!time) {
    alert('Por favor selecciona una hora para continuar.');
    return;
  }

  const lines = [
    'Hola Dr. Juan Atondo, me gustaría agendar una cita en SMILE ROOM - Los Mochis.',
    '',
    `- Nombre: ${name}`,
    `- Teléfono: ${phone}`,
    `- Tratamiento: ${service || 'Por definir'}`,
    `- Fecha preferida: ${date || 'Por definir'}`,
    `- Hora preferida: ${time || 'Por definir'}`,
  ];

  const text = encodeURIComponent(lines.join('\n'));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

  window.closeModal();
};

/* ─────────────────────────────────────────────────────────────
   7. NAVBAR ON SCROLL
   Adds/removes .scrolled on <nav> so CSS can switch from the
   glass/transparent look to a solid white card.
───────────────────────────────────────────────────────────── */
(function initNavbar() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}());

/* ─────────────────────────────────────────────────────────────
   8. MOBILE MENU TOGGLE
   The hamburger button toggles a hidden mobile nav panel.
   Add id="mobile-menu" to the panel in index.html to activate.
───────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  const hamburger = document.querySelector('button[data-mobile-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close when any link inside the menu is tapped
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}());
