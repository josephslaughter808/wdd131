const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/SL-Temple2.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/St-George-Utah-Temple4.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Laie-Hawaii-Temple1.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/rome-italy-temple-rendering.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Payson-utah-temple-rendering.jpg"
  },
  {
    templeName: "Palmyra New York Temple",
    location: "Palmyra, New York, United States",
    dedicated: "2000, April, 6",
    area: 10700,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Palmyra-New-York-Temple2.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Paris-Temple-Skylight2017-resized.jpg"
  },
  {
    templeName: "Monticello Utah Temple",
    location: "Monticello, Utah, United States",
    dedicated: "1998, July, 26",
    area: 11000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/monticelloutah_large.jpg"
  },
  {
    templeName: "Kansas City Missouri Temple",
    location: "Kansas City, Missouri, United States",
    dedicated: "2012, May, 6",
    area: 32000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Kansas-City-Missouri-Temple1.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21744,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/hongkong_large.jpg"
  },
  {
    templeName: "Feather River California Temple",
    location: "Yuba City, California, United States",
    dedicated: "2023, October, 8",
    area: 38793,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Feather-River---Exterior.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/640x480/Manti-Utah-Temple2.jpg"
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
