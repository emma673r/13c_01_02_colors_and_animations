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
  { offset: 0.4, fill: "var(--color-accent1)", transform: "translateY(0), translateX(10px)" },
  { offset: 1, transform: "translateY(-70vh)" },
];

const shuffleProp = {
  duration: 500,
  easing: "linear",
  animationDelay: 2000,
};

const shuffleKF = [
  { offset: 0, transform: "translateX(0px)" },
  { offset: 0.1, transform: "translateX(-10px)" },
  { offset: 0.2, transform: "translateX(0px)" },
  { offset: 0.4, transform: "translateX(10px)" },
  { offset: 0.6, transform: "translateX(0px)" },
  { offset: 0.8, transform: "translateX(-10px)" },
  { offset: 1, transform: "translateX(0px)" },
];

function start() {
  document.getElementById("rocket-btn").addEventListener("click", () => {
    const rocketAnim = document.getElementById("rocket").animate(rocketKF, rocketProp);
  });

  const demoBtns = document.querySelectorAll(".demoBtn");


  demoBtns.forEach((btn) => {
    btn.addEventListener("mouseover", (thisbtn) => {
    //   console.log(thisbtn.target);
      let thisBtn = thisbtn.target;

      thisBtn.animate(shuffleKF, shuffleProp);
    });
  });

    setTimeout(() => {
    //   console.log("it called the function");
      animateShuffle();
      setTimeout(() => {
        // console.log("it called the function again");
        animateShuffle();
        setTimeout(() => {
        //   console.log("it called the function again and again");
          animateShuffle();
          setTimeout(() => {
            // console.log("it called the function 4times");
            animateShuffle();
            setTimeout(() => {
            //   console.log("it called the function 5");
              animateShuffle();
              setTimeout(() => {
                // console.log("it called the function 6");
                animateShuffle();
                setTimeout(() => {
                //   console.log("it called the function 7");
                  animateShuffle();
                }, Math.floor(Math.random() * 9000));
              }, Math.floor(Math.random() * 12000));
            }, Math.floor(Math.random() * 7000));
          }, Math.floor(Math.random() * 20000));
        }, Math.floor(Math.random() * 12000));
      }, Math.floor(Math.random() * 8000));
    }, Math.floor(Math.random() * 11000));

  function animateShuffle(btn) {
    document.querySelectorAll(".demoBtn").forEach((btn) => {
      setTimeout(() => {
        // console.log("it shuffled");
        btn.animate(shuffleKF, shuffleProp);
      }, Math.floor(Math.random() * 2000));
    });
  }
}
