export function applyHashLinks() {
  // Hash links
  $(document).on("click", "a[href^=#]:not([href=#menu])", function (e) {
    if ($(this).prop("hash").split()[0] != "") {
      e.preventDefault();
      $("html, body").animate({
        // + height of fixed header + padding from it
        scrollTop: $($(this).attr("href")).offset().top - $("#top-nav").height() - 15
      }, 300);
    }
  });
}
