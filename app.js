document.addEventListener('DOMContentLoaded', function () {
  // Load the header
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;

          // Menu bar toggle functionality
          const menuToggle = document.querySelector('.hamburger-icon');
          const navbar = document.querySelector('.navbar');

          menuToggle.addEventListener('click', function () {
              navbar.classList.toggle('active');
          });

          // Dropdown menu logic
          const dropdowns = document.querySelectorAll('.dropdown');
          dropdowns.forEach(dropdown => {
              const trigger = dropdown.querySelector('span');
              const content = dropdown.querySelector('.dropdown-content');

              trigger.addEventListener('click', function (event) {
                  event.preventDefault(); // Prevent default anchor behavior
                  event.stopPropagation(); // Stop event from bubbling up
                  // Hide other dropdowns
                  dropdowns.forEach(d => {
                      if (d !== dropdown) {
                          d.querySelector('.dropdown-content').style.display = 'none';
                      }
                  });
                  // Toggle the clicked dropdown
                  content.style.display = content.style.display === 'block' ? 'none' : 'block';
              });

              // Close dropdown if clicked outside
              document.addEventListener('click', function (event) {
                  if (!dropdown.contains(event.target)) {
                      content.style.display = 'none';
                  }
              });
          });
      })
      .catch(error => console.error('Error loading the header:', error));

  // Carousel setup
  const images = document.getElementsByClassName('carousel-image');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currImage = 0; // Initialize currImage

  // Initially show the first image
  if (images.length > 0) {
      images[currImage].classList.add('active');
  }

  function showImage(index) {
      // Remove the active class from the current image
      images[currImage].classList.remove('active');

      // Update currImage to the new index using modulus for wrap-around
      currImage = (index + images.length) % images.length;

      // Add the active class to the new image
      images[currImage].classList.add('active');
  }

  // Event listeners for the buttons
  prevButton.addEventListener('click', () => {
      showImage(currImage - 1);
  });

  nextButton.addEventListener('click', () => {
      showImage(currImage + 1);
  });
});
