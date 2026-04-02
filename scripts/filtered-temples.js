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
  const style = templeStyles[temple.templeName];

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
    ${style ? `<p><strong>Style:</strong> <button type="button" class="style-link" data-style-key="${style.key}">${style.label}</button></p>` : ""}
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
  const group = styleGroups[styleKey];

  if (!group) {
    return;
  }

  const styleSet = new Set(group.temples);
  const list = operatingTemples.filter((temple) => styleSet.has(temple.templeName));
  displayTemples(list, group.label);
}

function setupFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.getElementById("templeCards");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const result = filterTemples(button.dataset.filter);
      displayTemples(result.list, result.title, result.announced);
    });
  });

  cards.addEventListener("click", (event) => {
    const styleButton = event.target.closest("[data-style-key]");

    if (!styleButton) {
      return;
    }

    filterByStyle(styleButton.dataset.styleKey);
  });
}

updateFooterDates();
setupMenu();
setupFilters();
displayTemples(operatingTemples, "Home");
