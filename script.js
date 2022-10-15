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
  duration: 300,
  easing: "linear",
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

const rotateProp = {
  duration: 5000,
  easing: "ease-in-out",
};

const rotateKF = [
  { offset: 0, transform: "rotate(0deg)" },
  {
    offset: 1,
    transform: "rotate(180deg)",
    fill: "var(--color-accent1)",
  },
];

const popProp = {
  duration: 300,
  easing: "ease-in-out",
};

const popKF = [
  {
    offset: 0.4,
    transform: "scale(1.2)",
  },
  {
    offset: 1,
    transform: "scale(0)",
  },
];

const pulseProp = {
  duration: 1000,
  easing: "ease-in-out",
};

const pulseKF = [
  { offset: 0, transform: "scale(1)" },

  {
    offset: 0.25,
    transform: "scale(0.8)",
  },
  {
    offset: 0.5,
    transform: "scale(1)",
  },
  {
    offset: 0.75,
    transform: "scale(0.8)",
  },
  {
    offset: 1,
    transform: "scale(1)",
    fill: "var(--color-accent1)",
  },
];

function start() {
  // rocket launches when btn clicked
  document.getElementById("rocket-btn").addEventListener("click", () => {
    const rocketAnim = document.getElementById("rocket").animate(rocketKF, rocketProp);
  });

  document.querySelector("#learn-btn").addEventListener("click", () => {
    document.querySelector("#learn-btn").animate(popKF, popProp);
  });

  // TODO cogs do smthng when btn clicked
  document.querySelector("#cog-btn").addEventListener("click", () => {
    const rotateAnim = document.querySelector("#cog").animate(pulseKF, pulseProp);
  });

  // TODO workd cogs turn when btn clicked

  document.querySelector("#demo").addEventListener("click", () => {
    const rotateAnim = document.querySelector("#world-cog").animate(rotateKF, rocketProp);
  });

  //  demo button shuffles - random timing and on hover
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
