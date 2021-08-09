(function iife(d, w) {
  const menu = d.querySelector('#mobile-menu');
  const menuLink = d.querySelector('.navbar__menu');
  const mobileWorksLink = d.querySelector('.work__nav__link');
  const homeLink = d.querySelector('.home__link');

  let workArray = [menu, mobileWorksLink, homeLink];

  workArray.forEach(x => {
    x.addEventListener('click', () => {
      menu.classList.toggle('is-active');
      menuLink.classList.toggle('active');
    })
  });

  gsap.from('.anim1', {
    duration: 1,
    y: -80
  });
  gsap.from('.anim2', {
    duration: 1.5,
    opacity: 0,
    y: 100,
  });
  gsap.from('.anim3', {
    duration: 2,
    delay: 1,
    y: -100,
    opacity: 0
  });
  gsap.from('.anim4', {
    duration: 1,
    delay: 2.1,
    y: 200,
    opacity: 0
  });


  let tl = gsap;

  tl.from('.anim5', {
    duration: 1,
    delay: .3,
    opacity: 0,
    y: 40,
    
    scrollTrigger: {
      trigger: '.anim5',
    }
  })
  tl.from('.anim6', {
    duration: 1,
    delay: .3,
    opacity: 0,
    y: 40,
    delay: .3,
    scrollTrigger: {
      trigger: '.anim6',
    }
  })
  tl.from('.anim7', {
    duration: 1,
    delay: .3,
    opacity: 0,
    y: 40,
    delay: .3,
    scrollTrigger: {
      trigger: '.anim7',
    }
  })
  tl.from('.anim8', {
    duration: 1,
    delay: .3,
    opacity: 0,
    y: 40,
    delay: .3,
    scrollTrigger: {
      trigger: '.anim8',
    }
  })
  tl.from('.anim9', {
    duration: 1,
    delay: .3,
    opacity: 0,
    y: 40,
    delay: .3,
    scrollTrigger: {
      trigger: '.anim9',
    }
  })
  tl.from('.anim10', {
    duration: 1,
    delay: .3,
    opacity: 0,
    y: 40,
    delay: .3,
    scrollTrigger: {
      trigger: '.anim10',
    }
  })

})(document, window);