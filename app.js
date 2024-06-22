document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger-icon');
    const navbar = document.querySelector('.navbar');
  
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });
  