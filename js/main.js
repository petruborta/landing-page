let prevScrollPos = window.pageYOffset;

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

const sections = document.querySelectorAll("#home, #menu, #about, #feed, #testimonials, #contact, #subscribe");

const contactButton = document.querySelector(".contact-btn");
const subscribeButton = document.querySelector(".subscribe-btn");
const elementsToShow = document.querySelectorAll(".show-on-scroll");

menuButton.onclick = toggleNav;
menuItems.forEach(menuItem => {
  menuItem.onclick = () => {
    toggleNav();
    removeClassFromArray(menuItems, "current");
    addClassTo(menuItem, "current");
  };
});

bookTableButton.onclick = openReservartionsForm;
closeFormButton.onclick = closeReservationsForm;
findTableButton.onclick = findTable;
scrollToMenuArrow.onclick = () => scrollToElement(sections[1]);
contactButton.onclick = (e) => e.preventDefault();
subscribeButton.onclick = (e) => e.preventDefault();

window.onscroll = handleScroll;
window.onresize = handleResize;

function handleScroll() {
  if (scrolledDown()) {
    if (onTablet()) {
      if (!navIsOpen()) {
        transform(navBar, "translateY(-100%)");
      }
      navBar.style.transition = "transform 0.35s ease-out";
    } else {
      setPadding(navWrapper, "0.5rem 1rem");
    }
  } else {
    if (onTablet()) {
      transform(navBar, "translateY(0)");
    } else {
      setPadding(navWrapper, "1.5rem 1rem");
    }
  }

  changeCurrentSectionOnScroll(sections, menuItems);
  updatePrevPosition();
}

function handleResize() {
  if (onTablet()) {
    if (menuItems[0].classList.contains("visible")) {
      executeAfter(() => removeClassFromArray(menuItems, "visible"), 500);
    }
  } else {
    if (navIsOpen()) {
      removeClassFrom(menuButton, "close");
      removeClassFrom(nav, "open");
    }
    
    addClassToArray(menuItems, "visible");
    transform(navBar, "translateY(0)");
  }
}

function changeCurrentSectionOnScroll(sections, menuItems) {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    if (sectionOccupiesMostPartOfViewport(rect)) {
      removeClassFromArray(menuItems, "current");
      addClassTo(menuItems[i], "current");
    }
  }
}

function sectionOccupiesMostPartOfViewport(section) {
  return section.top < window.innerHeight * 0.45
    && section.bottom > window.innerHeight * 0.25;
}

function onTablet() {
  return window.innerWidth < 1024;
}

function scrolledDown() {
  return prevScrollPos < window.pageYOffset;
}

function navIsOpen() {
  return nav.classList.contains("open");
}

function updatePrevPosition() {
  prevScrollPos = window.pageYOffset;
}

function setPadding(element, value) {
  element.style.padding = value;
}

function transform(element, value) {
  element.style.transform = value;
}

function scrollToElement(element) {
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

function addClassToArray(arr, className) {
  arr.forEach(element => {
    addClassTo(element, className);
  });
}

function addClassTo(element, className) {
  element.classList.add(className);
}

function removeClassFromArray(arr, className) {
  arr.forEach(element => {
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
  elementsToShow.forEach(element => {
    if (isElementInViewport(element)) {
      addClassTo(element, "visible");
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

changeCurrentSectionOnScroll(sections, menuItems);
loop();
