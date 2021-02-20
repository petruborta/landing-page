let scroll = window.requestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000 / 60)};

let elementsToShow = document.querySelectorAll(".show-on-scroll");

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
