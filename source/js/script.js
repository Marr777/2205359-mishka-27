// navigation toggle
let toggle = document.querySelector('.page-header__toggle');
let nav = document.querySelector('.page-header__navigation');
let navigation = document.querySelector('.header-navigation');

navigation.classList.remove('header-navigation--nojs');
toggle.classList.remove('page-header__toggle--nojs');

toggle.onclick = function () {
  nav.classList.toggle('page-header__navigation--closed');
  toggle.classList.toggle('page-header__toggle--closed');
};

// modal

const modal = document.querySelector('.modal');
const cartButtons = document.querySelectorAll('.cart-button');
const overlay = document.querySelector('.modal__overlay');

const toggleModal = function() {
  var changeModal = modal.classList.toggle('modal--open');
  return changeModal;
}

for (let cartBtn of cartButtons) {
  cartBtn.addEventListener ("click", toggleModal);
}

overlay.addEventListener ("click", toggleModal);
