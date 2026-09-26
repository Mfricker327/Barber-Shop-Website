// ===========================
// File: js/main.js
// VIntage Barbershop Porject
// ===========================
// ------DOM Elements ---------
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
//--------Helpers / Functions ---------------
// Update footer year automatically
const setCurrentYear = () => {
  // This update will update the year in the footer
  const now = new Date(); // new Date() is a pre-built constructor that pulls real- time date info.
  yearEl.textContent = now.getFullYear();
};
//Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
  if (!mobileMenu) return;
  if (isMenuOpen === false) {
    mobileMenu.classList.add("is-open");
    isMenuOpen = true;
  } else {
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
  }
};
// Close mobile menu (used when link is clicked)
const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};
//Reusable funciton with parameters (practice pattern)
const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};
//------Event Listener -----------
// 10 Set year on page load
setCurrentYear();
// 20 Hamburder menu toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMobileMenu();
  });
}
// 3) Close mobile menu when a mobile link is clicked (event deligtion)
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    //If they clicked an (a) inside the menu, close it
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}
// 40 CTA Button" "Book Now" (placeholder behavior)
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    updateHeadingText("Booking coming next - great choice!");
  });
}
// 50 Call Button: try to use the phone number in the footer
if (callBtn) {
  callBtn.addEventListener("click", () => {
    // If you later set phoneLink href to then this will work perfectly
    // For now, this is a beginner friendly place holder
    if (phoneLink) {
      updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
      updateHeadingText("Call feature coming next!");
    }
  });
}
