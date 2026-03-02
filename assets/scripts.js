'use strict';

/**
 * Element toggle function
 */
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

/**
 * Sidebar Toggle
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function() { 
        elementToggleFunc(sidebar); 
    });
}

/**
 * Testimonials Modal Logic
 */
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

if (modalContainer && modalCloseBtn && overlay) {
    const modalImg = document.querySelector('[data-modal-img]');
    const modalTitle = document.querySelector('[data-modal-title]');
    const modalText = document.querySelector('[data-modal-text]');

    const testimonialsModalFunc = function () {
        modalContainer.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    for (let i = 0; i < testimonialsItem.length; i++) {
        testimonialsItem[i].addEventListener('click', function () {
            const avatar = this.querySelector('[data-testimonials-avatar]');
            const titleEl = this.querySelector('[data-testimonials-title]');
            const textEl = this.querySelector('[data-testimonials-text]');
            
            if (modalImg && avatar) { modalImg.src = avatar.src; modalImg.alt = avatar.alt; }
            if (modalTitle && titleEl) modalTitle.innerHTML = titleEl.innerHTML;
            if (modalText && textEl) modalText.innerHTML = textEl.innerHTML;
            
            testimonialsModalFunc();
        });
    }

    modalCloseBtn.addEventListener('click', testimonialsModalFunc);
    overlay.addEventListener('click', testimonialsModalFunc);
}

/**
 * Portfolio Filter Logic
 */
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

// Dropdown filter for mobile
if (select) {
    select.addEventListener('click', function () { elementToggleFunc(this); });
}

for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {
        let selectedValue = this.innerText.toLowerCase().trim();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// Button filter for desktop
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function() {
        let selectedValue = this.innerText.toLowerCase().trim();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
    });
}

/**
 * Contact Form Validation
 */
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener('input', function () {
            if (form.checkValidity()) {
                formBtn.removeAttribute('disabled');
            } else { 
                formBtn.setAttribute('disabled', '');
            }
        });
    }
}

/**
 * Page Navigation (Tabs) - FIXED VERSION
 */
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
        
        const clickedPage = this.innerHTML.toLowerCase().trim();

        for (let j = 0; j < pages.length; j++) {
            if (clickedPage === pages[j].dataset.page) {
                pages[j].classList.add('active');
                navigationLinks[j].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove('active');
                navigationLinks[j].classList.remove('active');
            }
        }
    });
}
