"use strict";
gsap.registerPlugin(ScrollTrigger);

// Mobile Nav
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

const hamLinks = document.querySelectorAll(".pages .container-text");

// Hamburger Animation
const hamAnimation = function () {
  const tl = gsap.timeline();
  tl.from(".pages", { x: "100%", duration: 0.5, ease: "power1.inOut" }).from(
    hamLinks,
    { alpha: 0, bottom: -150, stagger: 0.1, ease: "power4.inOut" }
  );
};
const hamAnimationReverse = function () {
  const tl = gsap.timeline({
    onComplete: function () {
      document.querySelector(".pages").classList.toggle("active-menu");
      document.querySelector("body").classList.toggle("stop-scrolling");
    },
  });
  tl.to(hamLinks, {
    alpha: 0,
    bottom: -150,
    stagger: 0.1,
    ease: "power4.inOut",
  })
    .to(".pages", { x: "100%", duration: 0.5, ease: "power1.inOut" })
    .set(".pages", { clearProps: "all" })
    .set(hamLinks, { clearProps: "all" });
};

hamburgerMenu.addEventListener("click", () => {
  document.querySelector(".pages").classList.toggle("active-menu");
  document.querySelector("body").classList.toggle("stop-scrolling");
  hamAnimation();
});

closeMenu.addEventListener("click", () => {
  hamAnimationReverse();
});

// --------------------------------------------------
// On load animation
const onLoad = function () {
  const tl = new gsap.timeline();
  tl.from("nav", { duration: 0.7, y: -50, ease: "none" }, "na")
    .to("nav", { duration: 0.35, opacity: 1, ease: "none" }, "na+=0.35")
    .set("nav", { clearProps: "transform" })
    .from(
      ".quote .line-1 span",
      { alpha: 0, bottom: -150, duration: 0.7 },
      "na+=0.3"
    )
    .from(
      ".quote .line-2 span",
      { alpha: 0, bottom: -150, duration: 0.45 },
      "na+=0.55"
    )
    .from(".video", { y: 50, alpha: 0, duration: 1 }, "na+=0.6");
};
window.addEventListener("load", onLoad);

// --------------------------------------------------
// Links border animation
const linkAnimationStart = function () {
  const border = this.querySelector(".border");
  const tlBorder = new gsap.timeline();
  tlBorder
    .set(border, { left: "-100%" })
    .to(border, { duration: 0.4, left: "0%" });
};
const linkAnimationEnd = function () {
  const border = this.querySelector(".border");
  const tlBorder = new gsap.timeline();
  tlBorder
    .set(border, { left: "0%" })
    .to(border, { duration: 0.4, left: "100%" });
};
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseenter", linkAnimationStart);
  link.addEventListener("mouseleave", linkAnimationEnd);
});

// ---------------------------------------------------
// Featured section animation
const scrollAnimation = function () {
  // features
  gsap.from([left, right], {
    opacity: 0,
    duration: 0.7,
    y: 70,
    scrollTrigger: {
      trigger: ".features",
      start: "top center",
    },
  });
  gsap.from(".features .game", {
    opacity: 0,
    y: 70,
    duration: 1,
    onComplete: function () {
      gsap.set(".features .game", { clearProps: "all" });
    },
    scrollTrigger: {
      trigger: ".features",
      start: "top center",
    },
  });
  gsap.from(".features .container-text", {
    alpha: 0,
    bottom: -150,
    duration: 0.65,
    onComplete: function () {
      gsap.set(".stories .container-text", { alpha: "0" });
    },
    scrollTrigger: {
      trigger: ".features",
      start: "top center",
    },
  });

  // mission
  const missionTxt = document.querySelectorAll(".mission .container-text");
  gsap.fromTo(
    missionTxt,
    {
      bottom: -150,
    },
    {
      bottom: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".mission",
        start: "top center",
      },
    }
  );
  gsap.fromTo(
    ".mis .container-text",
    {
      bottom: -150,
    },
    {
      bottom: 0,
      scrollTrigger: {
        trigger: ".mission",
        start: "top center",
      },
    }
  );
  gsap.to(".mission", {
    backgroundPosition: "50% 100%",
    duration: 10,
    ease: "power2.in",
    scrollTrigger: {
      trigger: ".mission",
      start: "top-=250 center",
      end: "center+=300 center",
      scrub: true,
      toggleAction: "play none none reverse",
    },
  });

  //story
  gsap.from([Left, Right], {
    opacity: 0,
    duration: 0.7,
    y: 70,
    scrollTrigger: {
      trigger: ".stories",
      start: "top center",
    },
  });
  gsap.fromTo(
    "#story .game",
    { y: 70 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      onComplete: function () {
        gsap.set(".stories .game", { clearProps: "transform" });
      },
      scrollTrigger: {
        trigger: ".stories",
        start: "top center",
      },
    }
  );
  gsap.to(".stories .container-text", {
    alpha: 1,
    bottom: 0,
    duration: 0.65,
    scrollTrigger: {
      trigger: ".stories",
      start: "top center",
    },
  });
};
window.addEventListener("load", scrollAnimation);

// Game bg animation
const gameBgs = document.querySelectorAll(".game");
const bgScaleUp = function () {
  gsap.to(this, {
    backgroundSize: "120% 120%",
    duration: 3,
    ease: "linear",
  });
};
const bgScaleDown = function () {
  gsap.to(this, {
    backgroundSize: "100% 100%",
    duration: 3,
    ease: "linear",
  });
};

gameBgs.forEach((gamebg) => {
  gamebg.addEventListener("mouseenter", bgScaleUp);
  gamebg.addEventListener("mouseleave", bgScaleDown);
});

// const gameSpan = function () {
//   gameBgs.forEach((game) => {
//     const span = game.querySelectorAll(".container-text");
//     gsap.from(span, {
//       bottom: -150,
//       duration: 1,
//       scrollTrigger: {
//         horizontal: true,
//         trigger: game,
//         start: "left right",
//       },
//     });
//   });
// };

// document
//   .querySelectorAll(".horizontal-scroll div")
//   .addEventListener("click", gameSpan);

// -----------------------------------------------
// Horizontal scroll
// Features
const left = document.querySelector(".horizontal-scroll .left");
const right = document.querySelector(".horizontal-scroll .right");

let scrolled = 0;
left.style.opacity = 0;

const checkBtn = function () {
  if (scrolled == -50) {
    right.style.opacity = 0;
  } else {
    right.style.opacity = 1;
  }
  if (scrolled == 0) {
    left.style.opacity = 0;
  } else {
    left.style.opacity = 1;
  }
};

const scrollRight = function () {
  if (scrolled == -50) return 0;
  scrolled -= 25;
  gsap.to(".features-col", { x: `${scrolled}%`, duration: 1 });
  checkBtn();
};
const scrollLeft = function () {
  if (scrolled == 0) return 0;
  scrolled += 25;
  gsap.to(".features-col", { x: `${scrolled}%`, duration: 1 });
  checkBtn();
};

left.addEventListener("click", scrollLeft);
right.addEventListener("click", scrollRight);

// Stories
const Left = document.querySelector(".stories .horizontal-scroll .Left");
const Right = document.querySelector(".stories .horizontal-scroll .Right");

let Scrolled = 0;
Left.style.opacity = 0;
const CheckBtn = function () {
  if (Scrolled == -33.333) {
    Right.style.opacity = 0;
  } else {
    Right.style.opacity = 1;
  }
  if (Scrolled == 0) {
    Left.style.opacity = 0;
  } else {
    Left.style.opacity = 1;
  }
};

const ScrollRight = function () {
  if (Scrolled == -33.333) return 0;
  Scrolled -= 33.333;
  gsap.to(".stories-col", { x: `${Scrolled}%`, duration: 1 });
  CheckBtn();
};
const ScrollLeft = function () {
  if (Scrolled == 0) return 0;
  Scrolled += 33.333;
  gsap.to(".stories-col", { x: `${Scrolled}%`, duration: 1 });
  CheckBtn();
};

Left.addEventListener("click", ScrollLeft);
Right.addEventListener("click", ScrollRight);
