document.addEventListener("DOMContentLoaded", () => {
  const citySection = document.querySelector(".city");
  const homeSection = document.querySelector(".home");
  const citySelect = document.querySelector("#city-select");
  const changeCityLink = document.querySelector(".home__change-link");
  const homeTitle = document.querySelector("#home-title");

  const burgerBtn = document.querySelector(".navbar__burger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu__link");

  const footerChangeCityLink = document.querySelector("#footer-change-city");

  function goToCitySelect() {
    citySelect.value = "";
    homeSection.hidden = true;
    citySection.hidden = false;
    document.body.classList.remove("city-selected");
  }

  burgerBtn.addEventListener("click", () => {
    navMenu.hidden = !navMenu.hidden;
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.hidden = true;
    });
  });

  // always start with "default state"
  citySection.hidden = false;
  homeSection.hidden = true;

  citySelect.addEventListener("change", () => {
    const selectedCity = citySelect.value;
    if (!selectedCity) return;

    homeTitle.textContent = selectedCity.toUpperCase();
    citySection.hidden = true;
    homeSection.hidden = false;

    document.body.classList.add("city-selected");
  });

  changeCityLink.addEventListener("click", (event) => {
    event.preventDefault();
    goToCitySelect();
  });

  if (footerChangeCityLink) {
    footerChangeCityLink.addEventListener("click", (event) => {
      event.preventDefault();
      goToCitySelect();
    });
  }
});
