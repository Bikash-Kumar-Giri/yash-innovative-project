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