'use strict';

const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.navigation__list');
const icon = document.querySelector('.icon-main');
const heroHeading = document.querySelector('.hero__heading');
console.log(icon);
menuIcon.addEventListener('click', function (e) {
  navList.classList.toggle('display');
  const iconIsTrue = icon.href.baseVal === '/images/sprite.svg#icon-hamburger';

  if (iconIsTrue) {
    icon.href.baseVal = '/images/sprite.svg#icon-close';
    heroHeading.classList.add('display');
  } else {
    icon.href.baseVal = '/images/sprite.svg#icon-hamburger';
    heroHeading.classList.remove('display');
  }
});

// const creationsContainer = document.querySelector('.creations-container');
// const creationsHeader = document.querySelector('.creations__header');
// const btn = document.querySelector('.btn');

// const resize = function () {
//   let width = window.window.innerWidth;

//   if (width < 768) {
//     creationsContainer.append(btn);
//   } else {
//     creationsHeader.append(btn);
//   }
// };
// resize();
// window.addEventListener('resize', resize);
