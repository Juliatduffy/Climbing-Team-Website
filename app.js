// Dynamically load header on all pages using JS --------------------------
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Menu bar toggle functionality
      const menuToggle = document.querySelector(".hamburger-icon");
      const navbar = document.querySelector(".navbar");

      menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
      });

      const dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector("span");
        const content = dropdown.querySelector(".dropdown-content");

        // Add on click behavior for each menu bar item
        trigger.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
          dropdowns.forEach((d) => {
            if (d !== dropdown) {
              d.querySelector(".dropdown-content").style.display = "none";
            }
          });

          // Toggle the clicked dropdown
          content.style.display =
            content.style.display === "block" ? "none" : "block";
        });

        // Close dropdown if clicked outside
        document.addEventListener("click", function (event) {
          if (!dropdown.contains(event.target)) {
            content.style.display = "none";
          }
        });
      });
    })
    // Catch potential errors that occur while loading the header
    .catch((error) => console.error("Error loading the header:", error));

  // Image Carousel Stuff --------------------------------------------------------
  const images = document.getElementsByClassName("carousel-image");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currImage = 0;

  if (images.length > 0) {
    images[currImage].classList.add("active");
  }

  // Display current image
  function showImage(index) {
    images[currImage].classList.remove("active");
    currImage = (index + images.length) % images.length;
    images[currImage].classList.add("active");
  }

  // Event listeners for the buttons
  prevButton.addEventListener("click", () => {
    showImage(currImage - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currImage + 1);
  });
});

// Home Screen Pop-Up Stuff --------------------------------------------------------
const popup = document.getElementById("popup");
if (popup) {
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "none";
  }
}
