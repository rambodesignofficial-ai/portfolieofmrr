const FIXED_QUERY = "Mehmet Raman Resitoglu";

// INDEX redirect
const homeForm = document.getElementById("homeForm");
if (homeForm) {
  homeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = `results.html?q=${encodeURIComponent(FIXED_QUERY)}`;
  });
}

// RESULTS: zet query in zoekbalk, en force submit altijd naar fixed query
const resultsForm = document.getElementById("resultsForm");
const resultsInput = document.getElementById("resultsQuery");

if (resultsInput) {
  const params = new URLSearchParams(window.location.search);
  resultsInput.value = params.get("q") || FIXED_QUERY;
}

if (resultsForm) {
  resultsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = `results.html?q=${encodeURIComponent(FIXED_QUERY)}`;
  });
}
