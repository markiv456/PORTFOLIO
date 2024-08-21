'use strict';

// Toggle the 'active' class on an element
const toggleActiveClass = (element) => element.classList.toggle('active');

// Sidebar toggle for mobile
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
sidebarBtn.addEventListener('click', () => toggleActiveClass(sidebar));

// Testimonial modal functionality
const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const toggleTestimonialsModal = () => {
  toggleActiveClass(modalContainer);
  toggleActiveClass(overlay);
};

testimonialsItems.forEach((item) => {
  item.addEventListener('click', () => {
    modalImg.src = item.querySelector('[data-testimonials-avatar]').src;
    modalImg.alt = item.querySelector('[data-testimonials-avatar]').alt;
    modalTitle.textContent = item.querySelector('[data-testimonials-title]').textContent;
    modalText.textContent = item.querySelector('[data-testimonials-text]').textContent;
    toggleTestimonialsModal();
  });
});

modalCloseBtn.addEventListener('click', toggleTestimonialsModal);
overlay.addEventListener('click', toggleTestimonialsModal);

// Custom select functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

select.addEventListener('click', () => toggleActiveClass(select));

selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const selectedValue = item.textContent.toLowerCase();
    selectValue.textContent = item.textContent;
    toggleActiveClass(select);
    filterItemsByCategory(selectedValue);
  });
});

const filterItemsByCategory = (category) => {
  filterItems.forEach((item) => {
    const matchesCategory = category === 'all' || item.dataset.category === category;
    item.classList.toggle('active', matchesCategory);
  });
};

// Filtering items on large screens
let lastActiveFilterButton = filterButtons[0];

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedValue = button.textContent.toLowerCase();
    selectValue.textContent = button.textContent;
    filterItemsByCategory(selectedValue);

    lastActiveFilterButton.classList.remove('active');
    button.classList.add('active');
    lastActiveFilterButton = button;
  });
});

// Contact form validation
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

formInputs.forEach((input) => {
  input.addEventListener('input', () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetPage = link.textContent.toLowerCase();
    pages.forEach((page) => {
      const isActive = page.dataset.page === targetPage;
      page.classList.toggle('active', isActive);
      link.classList.toggle('active', isActive);
    });
    window.scrollTo(0, 0);
  });
});
