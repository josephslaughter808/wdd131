const styleGroups = {
  restoration: {
    label: "Restoration Temples",
    temples: [
      "St. George Utah Temple",
      "Santiago Chile Temple",
      "Sydney Australia Temple",
      "Apia Samoa Temple",
      "Atlanta Georgia Temple",
      "Denver Colorado Temple"
    ]
  },
  six_spired: {
    label: "Six-Spired Temples",
    temples: [
      "Boise Idaho Temple",
      "Manila Philippines Temple",
      "Dallas Texas Temple",
      "Taipei Taiwan Temple",
      "Guatemala City Guatemala Temple",
      "Stockholm Sweden Temple",
      "Chicago Illinois Temple",
      "Johannesburg South Africa Temple",
      "Seoul Korea Temple",
      "Lima Peru Temple",
      "Buenos Aires Argentina Temple",
      "Frankfurt Germany Temple"
    ]
  },
  landmark: {
    label: "Landmark Temples",
    temples: [
      "Portland Oregon Temple",
      "Las Vegas Nevada Temple",
      "Toronto Ontario Temple",
      "San Diego California Temple",
      "Orlando Florida Temple",
      "Bountiful Utah Temple",
      "Hong Kong China Temple",
      "Mount Timpanogos Utah Temple",
      "St. Louis Missouri Temple",
      "Preston England Temple",
      "Madrid Spain Temple",
      "Bogotá Colombia Temple",
      "Guayaquil Ecuador Temple",
      "Billings Montana Temple",
      "Albuquerque New Mexico Temple",
      "Cochabamba Bolivia Temple",
      "Houston Texas Temple",
      "Santo Domingo Dominican Republic Temple",
      "Boston Massachusetts Temple",
      "Recife Brazil Temple",
      "Campinas Brazil Temple"
    ]
  },
  standardized: {
    label: "Standardized Temples",
    temples: [
      "Spokane Washington Temple",
      "Columbus Ohio Temple",
      "Bismarck North Dakota Temple",
      "Columbia South Carolina Temple",
      "Detroit Michigan Temple",
      "Halifax Nova Scotia Temple",
      "Regina Saskatchewan Temple",
      "Edmonton Alberta Temple",
      "Raleigh North Carolina Temple",
      "St. Paul Minnesota Temple",
      "Kona Hawaii Temple",
      "Ciudad Juárez Mexico Temple",
      "Hermosillo Sonora Mexico Temple",
      "Oaxaca Mexico Temple",
      "Tuxtla Gutiérrez Mexico Temple",
      "Louisville Kentucky Temple",
      "Palmyra New York Temple",
      "Fresno California Temple",
      "Medford Oregon Temple",
      "Memphis Tennessee Temple",
      "Reno Nevada Temple",
      "Tampico Mexico Temple",
      "Nashville Tennessee Temple",
      "Villahermosa Mexico Temple",
      "Montreal Quebec Temple",
      "San José Costa Rica Temple",
      "Fukuoka Japan Temple",
      "Adelaide Australia Temple",
      "Melbourne Australia Temple",
      "Suva Fiji Temple",
      "Mérida Mexico Temple",
      "Veracruz Mexico Temple",
      "Baton Rouge Louisiana Temple",
      "Oklahoma City Oklahoma Temple",
      "Birmingham Alabama Temple",
      "Porto Alegre Brazil Temple",
      "Montevideo Uruguay Temple",
      "Guadalajara Mexico Temple",
      "Perth Australia Temple",
      "Asunción Paraguay Temple",
      "The Hague Netherlands Temple",
      "Brisbane Australia Temple",
      "Aba Nigeria Temple",
      "Caracas Venezuela Temple",
      "Winter Quarters Nebraska Temple",
      "Snowflake Arizona Temple",
      "Quetzaltenango Guatemala Temple"
    ]
  },
  new_millennium: {
    label: "New Millennium Temples",
    temples: [
      "Columbia River Washington Temple",
      "Lubbock Texas Temple",
      "Monterrey Mexico Temple",
      "Redlands California Temple",
      "Accra Ghana Temple",
      "San Antonio Texas Temple",
      "Newport Beach California Temple",
      "Sacramento California Temple",
      "Helsinki Finland Temple"
    ]
  },
  functional_remote: {
    label: "Functional Remote-Area Temples",
    temples: [
      "Yigo Guam Temple",
      "Praia Cape Verde Temple",
      "San Juan Puerto Rico Temple",
      "Cobán Guatemala Temple"
    ]
  },
  functional_modular: {
    label: "Functional Modular Temples",
    temples: [
      "Helena Montana Temple",
      "Casper Wyoming Temple",
      "Elko Nevada Temple",
      "Torreón Mexico Temple",
      "Cali Colombia Temple",
      "Cape Town South Africa Temple",
      "Phnom Penh Cambodia Temple",
      "Port Moresby Papua New Guinea Temple",
      "Tarawa Kiribati Temple",
      "Port Vila Vanuatu Temple"
    ]
  }
};

const templeStyles = Object.entries(styleGroups).reduce((map, [styleKey, group]) => {
  group.temples.forEach((templeName) => {
    map[templeName] = {
      key: styleKey,
      label: group.label
    };
  });
  return map;
}, {});

const defaultStyle = {
  key: "other_design",
  label: "Other / Individual Design"
};

const prophetPresidents = [
  { key: "brigham-young", label: "Brigham Young", start: 1847, end: 1877 },
  { key: "john-taylor", label: "John Taylor", start: 1880, end: 1887 },
  { key: "wilford-woodruff", label: "Wilford Woodruff", start: 1889, end: 1898 },
  { key: "lorenzo-snow", label: "Lorenzo Snow", start: 1898, end: 1901 },
  { key: "joseph-f-smith", label: "Joseph F. Smith", start: 1901, end: 1918 },
  { key: "heber-j-grant", label: "Heber J. Grant", start: 1918, end: 1945 },
  { key: "george-albert-smith", label: "George Albert Smith", start: 1945, end: 1951 },
  { key: "david-o-mckay", label: "David O. McKay", start: 1951, end: 1970 },
  { key: "joseph-fielding-smith", label: "Joseph Fielding Smith", start: 1970, end: 1972 },
  { key: "harold-b-lee", label: "Harold B. Lee", start: 1972, end: 1973 },
  { key: "spencer-w-kimball", label: "Spencer W. Kimball", start: 1973, end: 1985 },
  { key: "ezra-taft-benson", label: "Ezra Taft Benson", start: 1985, end: 1994 },
  { key: "howard-w-hunter", label: "Howard W. Hunter", start: 1994, end: 1995 },
  { key: "gordon-b-hinckley", label: "Gordon B. Hinckley", start: 1995, end: 2008 },
  { key: "thomas-s-monson", label: "Thomas S. Monson", start: 2008, end: 2018 },
  { key: "russell-m-nelson", label: "Russell M. Nelson", start: 2018, end: 2100 }
];

let currentView = "home";
let activeCardFilter = null;

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
  const style = getTempleStyle(temple);
  const prophet = !isAnnounced ? getTempleProphet(temple) : null;

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
    ${!isAnnounced ? `<p><strong>Style:</strong> <button type="button" class="style-link" data-style-key="${style.key}">${style.label}</button></p>` : ""}
    ${prophet ? `<p><strong>Prophet:</strong> <button type="button" class="prophet-link" data-prophet-key="${prophet.key}">${prophet.label}</button></p>` : ""}
  `;

  card.append(image, content);
  return card;
}

function displayTemples(templeList, title, isAnnounced = false) {
  const container = document.getElementById("templeCards");
  const pageTitle = document.getElementById("pageTitle");
  const templeCount = document.getElementById("templeCount");
  const activeFilterBar = document.getElementById("activeFilterBar");

  container.innerHTML = "";
  pageTitle.textContent = title;
  templeCount.textContent = `${templeList.length} temple${templeList.length === 1 ? "" : "s"}`;
  activeFilterBar.hidden = true;
  activeFilterBar.innerHTML = "";

  if (activeCardFilter) {
    activeFilterBar.hidden = false;
    activeFilterBar.innerHTML = `
      <div class="active-filter-pill">
        <span>${activeCardFilter.type}: ${activeCardFilter.label}</span>
        <button type="button" class="active-filter-close" id="clearCardFilter" aria-label="Clear filter">&times;</button>
      </div>
    `;
  }

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

function getTempleStyle(temple) {
  return templeStyles[temple.templeName] || defaultStyle;
}

function getTempleProphet(temple) {
  const year = getYear(temple.dedicated);
  return prophetPresidents.find((prophet) => year >= prophet.start && year <= prophet.end) || null;
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
        list: operatingTemples.filter((temple) => temple.area > 90000),
        announced: false
      };
    case "small":
      return {
        title: "Small",
        list: operatingTemples.filter((temple) => temple.area < 10000),
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

function filterByStyle(styleKey) {
  const list = operatingTemples.filter((temple) => getTempleStyle(temple).key === styleKey);
  const style = list.length > 0 ? getTempleStyle(list[0]) : defaultStyle;
  activeCardFilter = { type: "Style", label: style.label };
  displayTemples(list, "Home");
}

function filterByProphet(prophetKey) {
  const prophet = prophetPresidents.find((item) => item.key === prophetKey);

  if (!prophet) {
    return;
  }

  const list = operatingTemples.filter((temple) => {
    const templeProphet = getTempleProphet(temple);
    return templeProphet && templeProphet.key === prophetKey;
  });

  activeCardFilter = { type: "Prophet", label: prophet.label };
  displayTemples(list, "Home");
}

function clearCardFilter() {
  activeCardFilter = null;
  currentView = "home";
  const result = filterTemples("home");
  displayTemples(result.list, result.title, result.announced);
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.getElementById("templeCards");
  const activeFilterBar = document.getElementById("activeFilterBar");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.filter;
      activeCardFilter = null;
      const result = filterTemples(currentView);
      displayTemples(result.list, result.title, result.announced);
    });
  });

  cards.addEventListener("click", (event) => {
    const styleButton = event.target.closest("[data-style-key]");

    if (!styleButton) {
      const prophetButton = event.target.closest("[data-prophet-key]");

      if (!prophetButton) {
        return;
      }

      filterByProphet(prophetButton.dataset.prophetKey);
      return;
    }

    filterByStyle(styleButton.dataset.styleKey);
  });

  activeFilterBar.addEventListener("click", (event) => {
    if (event.target.id === "clearCardFilter") {
      clearCardFilter();
    }
  });
}

updateFooterDates();
setupMenu();
setupFilters();
displayTemples(operatingTemples, "Home");
