const menuButton = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.navbar-links');
const desktopQuery = window.matchMedia('(min-width: 1024px)');

if (menuButton && menuLinks) {
  function setMenuOpen(isOpen, restoreFocus = false) {
    menuButton.classList.toggle('is-open', isOpen);
    menuLinks.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    menuLinks.inert = !desktopQuery.matches && !isOpen;
    if (restoreFocus) menuButton.focus();
  }
  setMenuOpen(false);
  document.documentElement.classList.add('menu-enhanced');
  menuButton.addEventListener('click', () => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  menuLinks.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    setMenuOpen(false);
    const target = document.getElementById(link.hash.slice(1));
    if (target) target.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenuOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('nav') && menuButton.getAttribute('aria-expanded') === 'true') setMenuOpen(false, menuLinks.contains(document.activeElement));
  });
  menuLinks.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !event.relatedTarget.closest('nav')) setMenuOpen(false);
  });
  desktopQuery.addEventListener('change', () => setMenuOpen(false, !desktopQuery.matches && menuLinks.contains(document.activeElement)));
}
const year = document.getElementById('ano-atual');
if (year) year.textContent = String(new Date().getFullYear());
