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
    .from(".features h2 span", { bottom: -150 }, "na+=0.35")
    .set("nav", { clearProps: "transform" });
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
  const games = document.querySelectorAll(".game");
  games.forEach((game) => {
    gsap.from(game, {
      opacity: 0,
      y: 40,
      duration: 1,
      onComplete: function () {
        gsap.set(game, { clearProps: "all" });
      },
      scrollTrigger: {
        trigger: game,
        start: "top center+=300",
      },
    });
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
