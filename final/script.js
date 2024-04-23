"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", function (e) {
  // console.log(e.target.getBoundingClientRect());

  // console.log(document.documentElement.getBoundingClientRect()); //to know the actual height and width of the webpage

  // console.log(section1.getBoundingClientRect().left);
  // console.log(section1.getBoundingClientRect().top);
  // console.log(window.scrollY); //window.pageYoffset
  // console.log(window.scrollX); //window.pageXoffset

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   section1.getBoundingClientRect().left,
  //   section1.getBoundingClientRect().top + window.scrollY
  // );

  // smooth scrolling
  // 1-way
  // window.scrollTo({
  //   left:section1.getBoundingClientRect().left,
  //   top:section1.getBoundingClientRect().top + window.scrollY,
  //   behavior:"smooth",
  // });

  // 2-way
  section1.scrollIntoView({ behavior: "smooth" });
});

