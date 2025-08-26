// Load events from an external JSON file
// Format example:
// {
//   "2006-03-14": [
//     {
//       "title": "Weekly Practice",
//       "time": "6:00 PM - 9:00 PM",
//       "location": "Momentum Millcreek",
//       "about": "Fun bouldering session",
//       "img": "images/events/bouldering.jpg",
//       "color": "#4a90e2"  // optional, default if missing
//     }
//   ]
// }

document.addEventListener("DOMContentLoaded", () => {
  const calGrid = document.getElementById("calGrid");
  const monthYearEl = document.getElementById("calMonthYear");
  const prevBtn = document.getElementById("calPrev");
  const nextBtn = document.getElementById("calNext");

  const today = new Date();
  let view = new Date(today.getFullYear(), today.getMonth(), 1); // first day of current month

  let EVENT_DATA = {}; // will load from JSON

  // Fetch events JSON
  fetch("events.json")
    .then((res) => res.json())
    .then((data) => {
      EVENT_DATA = data;
      renderCalendar();
    })
    .catch((err) => console.error("Error loading events JSON:", err));

  function renderCalendar() {
    const year = view.getFullYear();
    const month = view.getMonth(); // 0..11

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    monthYearEl.textContent = `${monthNames[month]} ${year}`;

    calGrid.innerHTML = "";

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Empty cells for alignment
    for (let i = 0; i < firstDayIndex; i++) {
      const blank = document.createElement("div");
      blank.className = "day day--empty";
      blank.setAttribute("aria-hidden", "true");
      calGrid.appendChild(blank);
    }

    // Actual days
    for (let d = 1; d <= daysInMonth; d++) {
      const cell = document.createElement("div");
      cell.className = "day";

      const label = document.createElement("h4");
      label.textContent = d;
      cell.appendChild(label);

      // Highlight today
      if (
        d === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        cell.classList.add("day--today");
        label.setAttribute("aria-label", "Today");
      }

      // Add events
      const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        d
      ).padStart(2, "0")}`;
      const items = EVENT_DATA[key] || [];
      for (const ev of items) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "event";
        chip.textContent = ev.title;

        // Apply color if provided
        chip.style.backgroundColor = ev.color || "#4a90e2";

        // Store data for modal
        chip.dataset.title = ev.title;
        chip.dataset.time = ev.time || "";
        chip.dataset.location = ev.location || "";
        chip.dataset.about = ev.about || "";
        chip.dataset.img = ev.img || "";

        chip.addEventListener("click", () => openModal(chip));
        cell.appendChild(chip);
      }

      calGrid.appendChild(cell);
    }
  }

  // Modal
  const modal = document.getElementById("eventModal");
  const modalClose = modal.querySelector(".close");
  const modalTitle = document.getElementById("modalTitle");
  const modalTime = document.getElementById("modalTime");
  const modalLocation = document.getElementById("modalLocation");
  const modalAbout = document.getElementById("modalAbout");
  const modalImg = document.getElementById("modalImg");

  function openModal(target) {
    modal.style.display = "flex";
    modalTitle.textContent = target.dataset.title || "";
    modalTime.textContent = target.dataset.time || "";
    modalLocation.textContent = target.dataset.location || "";
    modalAbout.textContent = target.dataset.about || "";
    modalImg.src = target.dataset.img || "";
    modalImg.alt = target.dataset.title
      ? `${target.dataset.title} image`
      : "Event image";
  }

  modalClose.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Month navigation
  prevBtn.addEventListener("click", () => {
    view.setMonth(view.getMonth() - 1);
    renderCalendar();
  });
  nextBtn.addEventListener("click", () => {
    view.setMonth(view.getMonth() + 1);
    renderCalendar();
  });
});
