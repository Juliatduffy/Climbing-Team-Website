
// Menu bar stuff
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger-icon');
    const navbar = document.querySelector('.navbar');
  
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });
  
// Carousel stuff
const images = document.getElementsByClassName('carousel-image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
currImage = 0;
images[currImage].classList.add('active');


function showImage(index) {
  images[currImage].classList.remove('active');
  currImage++;
  
  if(currImage >= images.length) {
    currImage = 0;
  }
  else if(currImage < 0) {
    currImage = images.length - 1;
  }
  
  images[currImage].classList.add('active');
}

prevButton.addEventListener('click', () => {
  showImage(currImage - 1);
});

nextButton.addEventListener('click', () => {
  showImage(currImage + 1);
});

