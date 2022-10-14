"use strict";

window.addEventListener("DOMContentLoaded", start);

const rocketProp = {
  duration: 1000,
  easing: "linear",
};

const rocketKF = [
  { offset: 0, fill: "var(--color-primary2)", transform: "translateY(0), translateX(0px)" },
  { offset: 0.05, transform: "translateX(-10px)" },
  { offset: 0.1, transform: "translateX(0px)" },
  { offset: 0.15, transform: "translateX(10px)" },
  { offset: 0.2, transform: "translateX(0px)" },
  { offset: 0.25, transform: "translateX(-10px)" },
  { offset: 0.3, transform: "translateX(0px)" },
  { offset: 0.4, fill: "var(--color-accent1)",  transform: "translateY(0), translateX(10px)" },
  { offset: 1,transform: "translateY(-70vh)" },
];

function start() {
  document.getElementById("rocket-btn").addEventListener("click", () => {
    const rocketAnim = document.getElementById("rocket").animate(rocketKF, rocketProp);
  });
}
