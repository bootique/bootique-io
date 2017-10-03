export function applyHashLinks() {
  // Hash links
  $(document).on("click", "a[href^=#]:not([href=#menu])", function (e) {
    if ($(this).prop("hash").split()[0] != "") {
      $("html, body").animate({
        // + height of fixed header + padding from it
        scrollTop: $($(this).attr("href")).offset().top - $("#top-nav").find("#menu").height() - 40
      }, 300);
    }
  });
}
