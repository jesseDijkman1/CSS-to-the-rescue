"use strict";

(() => {
  const vehicles = document.querySelectorAll("[data-name=vehicle]");

  for (let i = 0; i < vehicles.length; i++) {
    vehicles[i].style.setProperty('--traffic-speed', randomTime(5, 15))
    vehicles[i].style.setProperty('--traffic-delay', randomTime(1, 20, true))
  }

  function randomTime(min, max, negative) {
    let n = Math.random() * ( max - min + 1) + min;

    if (negative) {
      n = n * -1;
    }

    return `${n.toFixed(2)}s`;
  }
})()
