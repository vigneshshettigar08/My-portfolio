'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const page = document.querySelectorAll("[data-page]");

for(let i = 0; i < navigationLinks.length; i++){
    navigationLinks[i].addEventListener("click", function () {
        for(let i = 0; i < page.length; i++){
            if (this.innerHTML.toLowerCase() === page[i].dataset.page){
                page[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0)
            } else {
                page[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}


const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("enabled");
    } else {
      formBtn.setAttribute("enabled", "");
    }
  });
}