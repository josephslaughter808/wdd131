function updateFooterDates() {
  const yearElement = document.getElementById("currentyear");
  const modifiedElement = document.getElementById("lastModified");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (modifiedElement) {
    modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
}

function setupMenu() {
  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("primaryNav");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
}

updateFooterDates();
setupMenu();
