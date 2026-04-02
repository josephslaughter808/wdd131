const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "images/temples/salt-lake-temple.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "images/temples/st-george-utah-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "images/temples/laie-hawaii-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/temples/rome-italy-temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/temples/payson-utah-temple.jpg"
  },
  {
    templeName: "Palmyra New York Temple",
    location: "Palmyra, New York, United States",
    dedicated: "2000, April, 6",
    area: 10700,
    imageUrl: "images/temples/palmyra-new-york-temple.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "images/temples/paris-france-temple.jpg"
  },
  {
    templeName: "Monticello Utah Temple",
    location: "Monticello, Utah, United States",
    dedicated: "1998, July, 26",
    area: 11000,
    imageUrl: "images/temples/monticello-utah-temple.jpg"
  },
  {
    templeName: "Kansas City Missouri Temple",
    location: "Kansas City, Missouri, United States",
    dedicated: "2012, May, 6",
    area: 32000,
    imageUrl: "images/temples/kansas-city-missouri-temple.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21744,
    imageUrl: "images/temples/hong-kong-china-temple.jpg"
  },
  {
    templeName: "Feather River California Temple",
    location: "Yuba City, California, United States",
    dedicated: "2023, October, 8",
    area: 38793,
    imageUrl: "images/temples/feather-river-california-temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/temples/manti-utah-temple.jpg"
  },
  {
    templeName: "Colonia Juarez Chihuahua Mexico Temple",
    location: "Colonia Juarez, Chihuahua, Mexico",
    dedicated: "1895, March, 6",
    area: 6800,
    imageUrl: "images/temples/colonia-juarez-chihuahua-mexico-temple.jpg"
  },
  {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl: "images/temples/yigo-guam-temple.jpg"
  },
  {
    templeName: "San Juan Puerto Rico Temple",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, January, 15",
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

function createTempleCard(temple) {
  const card = document.createElement("section");
  card.className = "temple-card";

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = "lazy";
  image.width = 600;
  image.height = 400;

  const content = document.createElement("div");
  content.className = "temple-card-content";
  content.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  card.append(image, content);
  return card;
}

function displayTemples(templeList, title) {
  const container = document.getElementById("templeCards");
  const pageTitle = document.getElementById("pageTitle");

  container.innerHTML = "";
  pageTitle.textContent = title;

  templeList.forEach((temple) => {
    container.appendChild(createTempleCard(temple));
  });
}

function getYear(dedicated) {
  return Number(dedicated.split(",")[0]);
}

function filterTemples(filter) {
  switch (filter) {
    case "old":
      return temples.filter((temple) => getYear(temple.dedicated) < 1900);
    case "new":
      return temples.filter((temple) => getYear(temple.dedicated) > 2000);
    case "large":
      return temples.filter((temple) => temple.area > 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
    default:
      return temples;
  }
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      const filtered = filterTemples(filter);
      const title = button.textContent.trim();
      displayTemples(filtered, title);
    });
  });
}

updateFooterDates();
setupMenu();
setupFilters();
displayTemples(temples, "Home");
