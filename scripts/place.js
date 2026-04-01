function updateFooterDates() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
}

function calculateWindChill(temperatureCelsius, windSpeedKilometers) {
  return `${(13.12 + 0.6215 * temperatureCelsius - 11.37 * windSpeedKilometers ** 0.16 + 0.3965 * temperatureCelsius * windSpeedKilometers ** 0.16).toFixed(1)} °C`;
}

function displayWindChill() {
  const temperature = Number(document.getElementById("temperature").textContent);
  const windSpeed = Number(document.getElementById("windSpeed").textContent);
  const windChillElement = document.getElementById("windChill");

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
  } else {
    windChillElement.textContent = "N/A";
  }
}

updateFooterDates();
displayWindChill();
