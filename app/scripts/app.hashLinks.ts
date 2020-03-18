export function applyHashLinks() {
  // Smooth scroll to #links (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
  $(`a[href*="#"]`)
    .not(`[href="#"]`)
    .not(`[href="#0"]`)
    .on("click", function (event: JQueryEventObject) {
      if (
        location.pathname.replace(/^\//, "") == $(this).prop("pathname").replace(/^\//, "") &&
        location.hostname == $(this).prop("hostname")
      ) {
        let target = $($(this).prop("hash"));
        const hash = $(this).prop("hash");
        target = target.length ? target : $("[name=" + $(this).prop("hash").slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate({
            scrollTop: target.offset().top  // - $("#top-nav").height() - 15   // + height of fixed header + padding from it
                                            // no fixed topNav -> no extra height dependencies
          }, 300, 'swing', () => location.hash = hash);
        }
      }
    });
}
