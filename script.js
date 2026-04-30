(function () {
  'use strict';

  // Nav scroll effect
  var nav = document.getElementById('nav-header');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  var burger = document.getElementById('nav-burger');
  var mobileMenu = document.getElementById('mobile-menu');

  burger.addEventListener('click', function () {
    var isOpen = burger.getAttribute('aria-expanded') === 'true';
    var next = !isOpen;
    burger.setAttribute('aria-expanded', String(next));
    burger.setAttribute('aria-label', next ? 'Закрыть меню' : 'Открыть меню');
    mobileMenu.hidden = !next;
  });

  // Close mobile menu when any link inside is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      mobileMenu.hidden = true;
    });
  });

  // Close mobile menu on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      mobileMenu.hidden = true;
      burger.focus();
    }
  });
}());
