const yearTarget = document.getElementById("current-year");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
