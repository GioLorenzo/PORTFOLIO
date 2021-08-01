(function iife(d, w) {
  const menu = d.querySelector('#mobile-menu');
  const menuLink = d.querySelector('.navbar__menu');

  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
  });

})(document, window);