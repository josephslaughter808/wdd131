const areaTemples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "April 6, 1893",
    area: 253000,
    imageUrl: "images/temples/salt-lake-temple.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, United States",
    dedicated: "April 6, 1877",
    area: 110000,
    imageUrl: "images/temples/st-george-utah-temple.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "May 17, 1884",
    area: 119619,
    imageUrl: "images/temples/logan-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "June 7, 2015",
    area: 96630,
    imageUrl: "images/temples/payson-utah-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "November 27, 1919",
    area: 42100,
    imageUrl: "images/temples/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 41010,
    imageUrl: "images/temples/rome-italy-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "May 21, 2017",
    area: 44000,
    imageUrl: "images/temples/paris-france-temple.jpg"
  },
  {
    templeName: "Kansas City Missouri Temple",
    location: "Kansas City, Missouri, United States",
    dedicated: "May 6, 2012",
    area: 32000,
    imageUrl: "images/temples/kansas-city-missouri-temple.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "May 26, 1996",
    area: 21744,
    imageUrl: "images/temples/hong-kong-china-temple.jpg"
  },
  {
    templeName: "Feather River California Temple",
    location: "Yuba City, California, United States",
    dedicated: "October 8, 2023",
    area: 38793,
    imageUrl: "images/temples/feather-river-california-temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "May 21, 1888",
    area: 74792,
    imageUrl: "images/temples/manti-utah-temple.jpg"
  },
  {
    templeName: "Colonia Juarez Chihuahua Mexico Temple",
    location: "Colonia Juarez, Chihuahua, Mexico",
    dedicated: "March 6, 1895",
    area: 6800,
    imageUrl: "images/temples/colonia-juarez-chihuahua-mexico-temple.jpg"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "May 22, 2022",
    area: 6861,
    imageUrl: "images/temples/yigo-guam-temple.jpg"
  },
  {
    templeName: "San Juan Puerto Rico Temple",
    location: "San Juan, Puerto Rico",
    dedicated: "January 15, 2023",
    area: 6988,
    imageUrl: "images/temples/san-juan-puerto-rico-temple.jpg"
  }
];

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
    ${temple.area ? `<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>` : ""}
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
    case "large":
      return {
        title: "Large",
        list: areaTemples.filter((temple) => temple.area > 90000),
        announced: false
      };
    case "small":
      return {
        title: "Small",
        list: areaTemples.filter((temple) => temple.area < 10000),
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
