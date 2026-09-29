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
const featureGrid = document.getElementById("featureGrid");
// -------- Services Data (Array of Objects) ---------//
const services = [
    {
    title: "Classic Haircuts",
    text: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/images/feature-1.jpg"
    },
    {
    title: "Beard Trim",
    text: "Shave and line-up your beard for a clean, sharp finish.",
    image: "assets/images/feature-2.jpg",
    },
    {
    title: "Straight Razor Shave",
    text: "Hot towel treatment with a smooth traditional shave.",
    image: "assets/images/feature-3.jpg"
    }
];
// ----- Nvaigation Data (Array of Objects)-----
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#features" },
  { label: "Book", href: "#cta" },
  { label: "Contact", href: "#footer" },
];
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
// ------Render Features using forEach --------//
const renderFeatures = () => {
    if (!featureGrid) return;
    services.forEach((service) => {
        const card = document.createElement("article");
        card.classList.add("feature-card");
        card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="feature-img"
        />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        `;
        featureGrid.appendChild(card);
    });
};
//-------------Render Features using map() ---------//
const renderFeaturesMap = () => {
    const cardsHTML = services.map((service) => {
        return `
    <article class="feature-card">
    <img src="${service.image}" alt="${service.title}" class="feature-img"/>
    <h3 class="feature-title">${service.title}</h3>
    <p class="feature-text">${service.text}</p>
    </article>
    `;
    }).join("");

    featureGrid.innerHTML = cardsHTML;
};

//------- Render Navigaiton Using Map() ------
const renderNavigation = () => {
  //Desktop Nav
  if (nav) {
    const navHTML = navLinks
    .map((link) => {
return `
<a href="${link.href}" class="nav-link">${link.label}</a>
`;
    }).join("");

    nav.innerHTML= navHTML;
  }
  //Mobile Nav
  if (mobileMenu) {
    const mobileHTML =navLinks.map((link) => {
      return`
      <a href="${link.href}" class="mobile-link">${link.label}</a>
    `;
    }).join("");

    mobileMenu.innerHTML = mobileHTML;
  }
};
//--------Function Calls --------
renderFeatures();
//renderFeaturesMap();
renderNavigation();

