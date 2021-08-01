(function iife(d, w) {
  const menu = d.querySelector('#mobile-menu');
  const menuLink = d.querySelector('.navbar__menu');
  const mobileWorksLink = d.querySelector('.work__nav__link');
  const homeLink = d.querySelector('.home__link');

  let workArray = [menu, mobileWorksLink, homeLink];

  workArray.forEach(x => {x.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
  })
  });

})(document, window);