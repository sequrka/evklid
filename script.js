const swiper = new Swiper('.hero__swiper', {
  loop: true,
  spaceBetween: 30,
  a11y: {
  paginationBulletMessage: 'Следующий слайд' , },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })

})


let stepsBtn = document.querySelectorAll('.steps-list__item-button');
let stepItem = document.querySelectorAll('.block-consult');


stepsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    stepsBtn.forEach(function (btn) { btn.classList.remove('steps-list__btn--active') });
    e.currentTarget.classList.add('steps-list__btn--active');

    stepItem.forEach(function (element) { element.classList.remove('block-consults--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('block-consults--active');
  });
});


new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


let button = document.querySelector('.open-svg');
let form = document.querySelector('.header-form');
let nope = form.querySelector('.close-svg');


button.addEventListener('click',

  function () {

    form.classList.toggle('header-form--active');

    document.body.classList.toggle('stop-scroll');

  });

nope.addEventListener('click',

  function () {

    form.classList.remove('header-form--active');

    document.body.classList.remove('stop-scroll');

  });


