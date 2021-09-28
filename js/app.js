const App = (() => {
  // Caching the DOM
  const buttonEl = document.querySelector(".change-color");
  const h3El = document.querySelector("h3");
  const bodyEl = document.querySelector("body");

  function randNum() {
    let number = Math.floor(Math.random() * 255) + 1;
    return number;
  }

  function newColor() {
    return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
  }

  function renderPage() {
    const color = newColor();
    h3El.innerHTML = color;
    bodyEl.style.backgroundColor = color;
  }

  function init() {
    buttonEl.addEventListener("click", function () {
      renderPage();
    });
  }

  return {
    init: init,
  };
})();

App.init();
