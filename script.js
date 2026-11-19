// Update these destinations with your real contact links before publishing.
const KENLENS = {
  youtube: 'https://www.youtube.com/',
  email: 'hello@kenlens.com',
  whatsappNumbers: ['254118265534', '25426749232', '254700368311'],
  whatsappMessage: 'Hello Kenlens, I have an enquiry about your services.',
  // Before each live stream, paste the video ID from its YouTube link here.
  // Example: youtube.com/watch?v=AbC123xyz → use AbC123xyz
  liveVideoId: ''
};

document.querySelectorAll('[data-link="youtube"]').forEach(link => link.href = KENLENS.youtube);
document.querySelectorAll('[data-link="email"]').forEach(link => link.href = 'mailto:' + KENLENS.email);
document.querySelectorAll('[data-link="whatsapp"]').forEach(link => link.href = 'https://wa.me/' + KENLENS.whatsappNumbers[0] + '?text=' + encodeURIComponent(KENLENS.whatsappMessage));

document.querySelectorAll('.live-embed').forEach(player => {
  if (KENLENS.liveVideoId) {
    player.querySelector('iframe').src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(KENLENS.liveVideoId) + '?autoplay=0';
    player.querySelector('.live-placeholder').hidden = true;
  }
});

const phoneList = document.getElementById('phone-numbers');
const whatsappList = document.getElementById('whatsapp-numbers');
KENLENS.whatsappNumbers.forEach(number => {
  const phone = document.createElement('a');
  phone.href = 'tel:+' + number;
  phone.textContent = '+' + number;
  phoneList?.appendChild(phone);

  const whatsapp = document.createElement('a');
  whatsapp.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(KENLENS.whatsappMessage);
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener';
  whatsapp.textContent = '+' + number;
  whatsappList?.appendChild(whatsapp);
});
const contactToggle = document.getElementById('contact-toggle');
if (contactToggle) {
  contactToggle.addEventListener('click', () => {
    const panel = document.getElementById('contact-panel');
    const open = panel.classList.toggle('open');
    contactToggle.setAttribute('aria-expanded', open);
  });
}
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
    menuButton.textContent = open ? '×' : '☰';
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());



document.querySelectorAll('.service-enquiry').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const service = form.dataset.serviceEnquiry;
    const details = Array.from(new FormData(form).entries()).map(([label, value]) => `${label}: ${value}`).join('\n');
    const message = `Kenlens ${service} enquiry\n\n${details}`;
    const url = 'https://wa.me/' + KENLENS.whatsappNumbers[0] + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank', 'noopener');
  });
});

