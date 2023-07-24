const hambergur = document.querySelector(`.hamburger`);
const navLinks = document.querySelector(`.nav__links`);
const btnScroll = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const btnOpen = document.querySelectorAll(`.open-modal`);
const btnClose = document.querySelector(`.btn-close`);
const modal = document.querySelector(`.modal`);
const ovaerlay = document.querySelector(`.overlay`);
const tab = document.querySelectorAll(`.btn`);
const content = document.querySelectorAll(`.explore-content`);

// modal window
const openModal = function () {
  modal.classList.remove(`hidden`);
  ovaerlay.classList.remove(`hidden`);
};
const closeModal = function () {
  modal.classList.add(`hidden`);
  ovaerlay.classList.add(`hidden`);
};
btnOpen.forEach((n) => n.addEventListener(`click`, openModal));
btnClose.addEventListener(`click`, closeModal);
ovaerlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key == `Escape` || !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
// hamburger manu
hambergur.addEventListener(`click`, function () {
  hambergur.classList.toggle(`active`);
  navLinks.classList.toggle(`active`);
});
document.querySelectorAll(`.nav__link`).forEach((n) =>
  n.addEventListener(`click`, function () {
    hambergur.classList.remove(`active`);
    navLinks.classList.remove(`active`);
  })
);

// smooth scroll
btnScroll.addEventListener(`click`, function () {
  section1.scrollIntoView({ behavior: `smooth` });
});
// /////////////////////////////////////
// Tabbed component

document
  .querySelector(`.explore-container`)
  .addEventListener(`click`, function (e) {
    const clicked = e.target.closest(`.btn`);

    if (!clicked) return;

    tab.forEach((b) => b.classList.remove(`btn-active`));
    clicked.classList.add(`btn-active`);

    content.forEach((t) => t.classList.remove(`explore-content-active`));
    document
      .querySelector(`.explore-content-${clicked.dataset.tab}`)
      .classList.add(`explore-content-active`);
  });
// smooth scroll in sections
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// hover on nav links
const nav = document.querySelector(`.nav`);
const hover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const sibling = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
nav.addEventListener(`mouseover`, hover.bind(0.5));
nav.addEventListener(`mouseout`, hover.bind(1));
