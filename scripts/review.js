function updateFooterDates() {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
}

function incrementReviewCount() {
  const storageKey = "reviewCount";
  const currentCount = Number(localStorage.getItem(storageKey)) || 0;
  const updatedCount = currentCount + 1;

  localStorage.setItem(storageKey, String(updatedCount));
  document.getElementById("reviewCount").textContent = updatedCount;
}

updateFooterDates();
incrementReviewCount();
