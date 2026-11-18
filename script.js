// Update these destinations with your real contact links before publishing.
const KENLENS = {
  youtube: 'https://www.youtube.com/',
  publicGallery: 'https://drive.google.com/',
  clientGallery: 'https://drive.google.com/',
  email: 'hello@kenlens.com',
  whatsappNumbers: ['254118265534', '25426749232', '254700368311'],
  whatsappMessage: 'Hello Kenlens, I have an enquiry about your services.',
  // Before each live stream, paste the video ID from its YouTube link here.
  // Example: youtube.com/watch?v=AbC123xyz → use AbC123xyz
  liveVideoId: ''
};

document.querySelectorAll('[data-link="youtube"]').forEach(link => link.href = KENLENS.youtube);
document.querySelectorAll('[data-link="public-gallery"]').forEach(link => link.href = KENLENS.publicGallery);
document.querySelectorAll('[data-link="client-gallery"]').forEach(link => link.href = KENLENS.clientGallery);
document.querySelectorAll('[data-link="email"]').forEach(link => link.href = 'mailto:' + KENLENS.email);
document.querySelectorAll('[data-link="whatsapp"]').forEach(link => link.href = 'https://wa.me/' + KENLENS.whatsappNumbers[0] + '?text=' + encodeURIComponent(KENLENS.whatsappMessage));

document.querySelectorAll('.live-embed').forEach(player => {
  if (KENLENS.liveVideoId) {
    player.querySelector('iframe').src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(KENLENS.liveVideoId) + '?autoplay=0';
    player.querySelector('.live-placeholder').hidden = true;
  }
});

const numberList = document.getElementById('whatsapp-numbers');
if (numberList) {
  KENLENS.whatsappNumbers.forEach(number => {
    const link = document.createElement('a');
    link.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(KENLENS.whatsappMessage);
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = '+' + number;
    numberList.appendChild(link);
  });
}
const chatButton = document.getElementById('whatsapp-chat');
if (chatButton) {
  chatButton.addEventListener('click', () => {
    const options = document.getElementById('whatsapp-options');
    const open = options.classList.toggle('open');
    chatButton.setAttribute('aria-expanded', open);
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

