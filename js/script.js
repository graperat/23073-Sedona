var link = document.querySelector(".btn--menu-close");

var popup = document.querySelector(".main-menu__list:first-child");var po = document.querySelector(".main-menu__list:last-child");var pop = document.querySelector(".main-menu__list:nth-child(2)");var popu = document.querySelector(".main-menu__list:nth-child(4)");

 link.addEventListener("click", function(event) {

 event.preventDefault();

 popup.classList.add("close-menu");po.classList.add("close-menu");pop.classList.add("close-menu");popu.classList.add("close-menu");

 });var link = document.querySelector(".btn--menu-toggle");

 var popup = document.querySelector(".main-menu__item:first-child");var po = document.querySelector(".main-menu__item:last-child");var pop = document.querySelector(".main-menu__item:nth-child(2)");var popu = document.querySelector(".main-menu__item:nth-child(4)");

 link.addEventListener("click", function(event) {

 event.preventDefault();

 popup.classList.add("main-menu__list");po.classList.add("main-menu__list");pop.classList.add("main-menu__list");popu.classList.add("main-menu__list");

 });