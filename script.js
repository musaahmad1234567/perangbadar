/* ============================= */
/* NAVBAR SCROLL */
/* ============================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* ============================= */
/* MOBILE MENU */
/* ============================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


/* ============================= */
/* CLOSE MOBILE MENU */
/* ============================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});


/* ============================= */
/* SCROLL REVEAL */
/* ============================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* ============================= */
/* ACTIVE NAVIGATION */
/* ============================= */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection = section.getAttribute("id");

    }

  });


  navigationLinks.forEach((link) => {

    link.classList.remove("active");

    const target =
      link.getAttribute("href");

    if (target === `#${currentSection}`) {

      link.classList.add("active");

    }

  });

});


/* ============================= */
/* BUTTON HOVER EFFECT */
/* ============================= */

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transition = "0.3s";

  });

});


/* ============================= */
/* INITIAL REVEAL */
/* ============================= */

window.addEventListener("load", () => {

  const firstElements =
    document.querySelectorAll(
      ".hero .reveal"
    );

  firstElements.forEach((element, index) => {

    setTimeout(() => {

      element.classList.add("show");

    }, index * 150);

  });

});