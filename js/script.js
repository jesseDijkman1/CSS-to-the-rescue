"use strict";

(() => {
  const vehicles = document.getElementsByClassName("vehicle"),
        clouds = document.querySelectorAll(".clouds path"),
        stars = document.querySelectorAll(".stars polygon:nth-child(3n + 1)"),
        windows = document.querySelectorAll(".windows *"),
        ufoSideLights = document.querySelectorAll(".ufo-side-lights *")

  // Set random timing for the svg vehicles/traffic
  for (let i = 0; i < vehicles.length; i++) {
    vehicles[i].style.setProperty("--traffic-speed", randomTime(5, 15));
    vehicles[i].style.setProperty("--traffic-delay", randomTime(1, 20, true));
  }

  // Set random timing for the svg clouds
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].style.setProperty("--cloud-speed", randomTime(40, 60));
    clouds[i].style.setProperty("--cloud-delay", randomTime(30, 70, true));
  }

  // Set random delay for the svg stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.setProperty("--star-delay", randomTime(1, 5, true));
  }

  // Set random delay for svg windows (dark mode)
  for (let i = 0; i < windows.length; i++) {
    windows[i].style.setProperty("--window-delay", randomTime(3, 11, true));
  }

  // Set ordered delays vor side lights of the svg ufo
  for (let i = 0; i < ufoSideLights.length; i++) {
    ufoSideLights[i].style.setProperty("--lights-delay", `-.${i}s`)
  }

  // Return a random time between a give minimum and maximum, for a negative number pass true as last param
  function randomTime(min, max, negative) {
    let n = Math.random() * ( max - min + 1) + min;

    n = negative ? n * -1 : n;

    return `${n.toFixed(2)}s`;
  }
})();
