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

  gsap.from('.anim1', { duration: 1, y: -80 });
  gsap.from('.anim2', { duration: 1.5, opacity: 0, y: 100, });
  gsap.from('.anim3', { duration: 1, delay: 1.1, x: 200, opacity: 0 });

})(document, window);