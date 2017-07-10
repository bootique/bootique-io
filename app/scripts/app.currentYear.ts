export function applyCurrentYear() {
  // Current year in footer
  const currentYear = new Date().getFullYear();
  const currentYearSelector = $(".current-year");

  if (currentYearSelector.length) {
    currentYearSelector.text(currentYear);
  }
}
