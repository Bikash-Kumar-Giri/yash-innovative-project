document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.mobile-menu-overlay');

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('shift-right');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('shift-right');
  });
});
document.querySelectorAll('.clickable-row').forEach(row => {
  row.addEventListener('click', function() {
      this.style.backgroundColor = '#d0d0d0'; // Change color on click
      setTimeout(() => {
          this.style.backgroundColor = ''; // Reset color after 200ms
      }, 200);
  });
});

// chat-modal.js
document.addEventListener('DOMContentLoaded', function () {
  const chatButton = document.querySelector('.chat-button');
  const chatModal = document.getElementById('chatModal');
  const closeButton = document.querySelector('.close');

  // Open the chat modal with animation
  chatButton.addEventListener('click', function (e) {
      e.preventDefault();
      chatModal.style.display = 'flex';
  });

  // Close the chat modal with animation
  closeButton.addEventListener('click', function () {
      chatModal.style.animation = 'fadeOut 0.3s ease-in-out';
      setTimeout(() => {
          chatModal.style.display = 'none';
          chatModal.style.animation = ''; // Reset animation
      }, 300); // Match the animation duration
  });

  // Close the chat modal when clicking outside the modal
  window.addEventListener('click', function (event) {
      if (event.target === chatModal) {
          chatModal.style.animation = 'fadeOut 0.3s ease-in-out';
          setTimeout(() => {
              chatModal.style.display = 'none';
              chatModal.style.animation = ''; // Reset animation
          }, 300); // Match the animation duration
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filterPeriod = document.querySelector(".filter-period");
  const datePickerContainer = document.querySelector(".date-picker-container");

  filterPeriod.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents event bubbling
      datePickerContainer.style.display =
          datePickerContainer.style.display === "block" ? "none" : "block";
  });

  // Close date picker when clicking outside
  document.addEventListener("click", function (event) {
      if (!filterPeriod.contains(event.target)) {
          datePickerContainer.style.display = "none";
      }
  });
});
