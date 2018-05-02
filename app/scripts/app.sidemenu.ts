export function applySideMenu() {
  const menu = $("#menu");
  const menuLink = $("#menuToggle");
  const html = $("html");

  menuLink.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    menu.toggleClass("active");
    html.toggleClass("inactive no-scroll");
  });
}
