/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggel = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggel) {
  navToggel.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== HOME SWIPER ===============*/
var homeSswiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== DEALS TAB ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target= document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab');
      });

      target.classList.add('active-tab');

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
      });

      tab.classList.add('active-tab');
    });
  });

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
  if(this.scrollY>= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)