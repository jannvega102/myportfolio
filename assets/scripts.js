'use strict';

/**
 * Element toggle function
 */
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * Sidebar Toggle logic
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function() { elementToggleFunc(sidebar); });
}

/**
 * SPA Page Navigation Logic - FIXED & COMPLETE
 */
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    const targetPageName = this.innerHTML.toLowerCase().trim();

    // Loop 1: Handle Page Visibility
    for (let j = 0; j < pages.length; j++) {
      if (targetPageName === pages[j].dataset.page) {
        pages[j].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove('active');
      }
    }

    // Loop 2: Handle Active Button State
    for (let k = 0; k < navigationLinks.length; k++) {
      if (this === navigationLinks[k]) {
        navigationLinks[k].classList.add('active');
      } else {
        navigationLinks[k].classList.remove('active');
      }
    }
  });
}

/**
 * Basic Portfolio Filter Logic (Optional helper)
 */
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all" || selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
}
