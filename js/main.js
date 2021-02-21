const navBar = document.querySelector(".navbar");
const navWrapper = navBar.querySelector(".nav-wrapper");
const nav = navWrapper.querySelector("nav");
const menuButton = document.querySelector(".menu-btn");
const menuItems = nav.querySelectorAll(".show-on-scroll");

const bookTableButton = document.querySelector(".book-table-btn");
const modal = document.querySelector(".modal");
const reservationsForm = modal.querySelector(".reservations-container");
const findTableButton = reservationsForm.querySelector(".find-table-btn");
const closeFormButton = reservationsForm.querySelector(".close-btn");

const scrollToMenuArrow = document.querySelector(".arrow-down");

const menuSection = document.querySelector("#menu");

const contactButton = document.querySelector(".contact-btn");
const subscribeButton = document.querySelector(".subscribe-btn");
const elementsToShow = document.querySelectorAll(".show-on-scroll");

menuButton.onclick = toggleNav;
bookTableButton.onclick = openReservartionsForm;
closeFormButton.onclick = closeReservationsForm;
findTableButton.onclick = findTable;
scrollToMenuArrow.onclick = () => scrollTo(menuSection);
contactButton.onclick = (e) => e.preventDefault();
subscribeButton.onclick = (e) => e.preventDefault();

window.onscroll = () => {
  if (window.innerWidth < 1024) {
    console.log("kek");
  }
}

window.onresize = () => {
  if (window.innerWidth >= 1024) {
    if (nav.classList.contains("open")) {
      removeClassFrom(nav, "open");
      removeClassFrom(menuButton, "close");
    }
  } else {
    if (menuItems[0].classList.contains("visible")) {
      executeAfter(() => removeClassFromArray(menuItems, "visible"), 500);
    }
  }
}

function scrollTo(element) {
  element.scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function toggleNav() {
  toggleClassOf(menuButton, "close");
  toggleClassOf(nav, "open");
  if (!menuButton.classList.contains("close")) {
    executeAfter(() => removeClassFromArray(menuItems, "visible"), 500);
  }
}

function findTable(e) {
  e.preventDefault();
  closeReservationsForm();
}

function openReservartionsForm() {
  removeClassFrom(reservationsForm, "zoom-out");
  show(modal);
}

function closeReservationsForm() {
  addClassTo(reservationsForm, "zoom-out");
  executeAfter(() => hide(modal), 300);
}


function addClassTo(element, className) {
  element.classList.add(className);
}

function removeClassFromArray(arr, className) {
  arr.forEach((element) => {
    removeClassFrom(element, className);
  });
}

function removeClassFrom(element, className) {
  element.classList.remove(className);
}

function toggleClassOf(element, className) {
  element.classList.toggle(className);
}

function show(element) {
  element.classList.remove("invisible");
}

function hide(element) {
  element.classList.add("invisible");
}

function executeAfter(callback, time) {
  setTimeout(() => callback(), time);
}

const scroll = window.requestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000 / 60)};

function loop() {
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    }
  });

  scroll(loop);
}

function isElementInViewport(el) {
  let  rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    || (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

loop();
