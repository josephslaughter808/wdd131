function updateFooterDates() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
}

function setupMenu() {
  const menuButton = document.getElementById("menuButton");
  const navigation = document.getElementById("primaryNav");

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

function createTempleCard(temple, isAnnounced = false) {
  const card = document.createElement("section");
  card.className = "temple-card";

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = "lazy";
  image.width = 320;
  image.height = 240;

  const content = document.createElement("div");
  content.className = "temple-card-content";
  content.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>${isAnnounced ? "Status" : "Dedicated"}:</strong> ${temple.dedicated}</p>
  `;

  card.append(image, content);
  return card;
}

function displayTemples(templeList, title, isAnnounced = false) {
  const container = document.getElementById("templeCards");
  const pageTitle = document.getElementById("pageTitle");
  const templeCount = document.getElementById("templeCount");

  container.innerHTML = "";
  pageTitle.textContent = title;
  templeCount.textContent = `${templeList.length} temple${templeList.length === 1 ? "" : "s"}`;

  if (templeList.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No temples match this filter.";
    container.appendChild(message);
    return;
  }

  templeList.forEach((temple) => {
    container.appendChild(createTempleCard(temple, isAnnounced));
  });
}

function getYear(dateText) {
  const match = dateText.match(/\d{4}/);
  return match ? Number(match[0]) : NaN;
}

function filterTemples(filter) {
  switch (filter) {
    case "old":
      return {
        title: "Old",
        list: operatingTemples.filter((temple) => getYear(temple.dedicated) < 1900),
        announced: false
      };
    case "new":
      return {
        title: "New",
        list: operatingTemples.filter((temple) => getYear(temple.dedicated) > 2000),
        announced: false
      };
    case "announced":
      return {
        title: "Announced",
        list: announcedTemples,
        announced: true
      };
    default:
      return {
        title: "Home",
        list: operatingTemples,
        announced: false
      };
  }
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const result = filterTemples(button.dataset.filter);
      displayTemples(result.list, result.title, result.announced);
    });
  });
}

updateFooterDates();
setupMenu();
setupFilters();
displayTemples(operatingTemples, "Home");
