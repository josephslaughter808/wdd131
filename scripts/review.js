function incrementReviewCount() {
  const storageKey = "reviewCount";
  const currentCount = Number(localStorage.getItem(storageKey)) || 0;
  const updatedCount = currentCount + 1;

  localStorage.setItem(storageKey, String(updatedCount));
  document.getElementById("reviewCount").textContent = updatedCount;
}

incrementReviewCount();
