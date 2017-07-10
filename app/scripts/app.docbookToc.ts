export function applyDocbookToc() {
  // Docbook TOC -> add hash
  if ($(".docbook").length) {
    $(".docbook h1 > a, .docbook h2 > a, .docbook h3 > a, .docbook .container-fluid").each(function () {
      $(this).attr("id", $(this).attr("name"));
    });
  }

  // add scrollspy classes
  if ($(".bs-docs-sidenav").length) {
    $(".bs-docs-sidenav ul").addClass("nav");
  }

  // unwrapping unnecessary els + add title attr
  const sidenavLinks = $(".bs-docs-sidenav a");
  if (sidenavLinks.length) {

    sidenavLinks.each(function () {
      // unwrap
      const thisParent = $(this).parent();
      if (thisParent.is("span")) {
        $(this).unwrap();
      }

      // title
      $(this).attr("title", $(this).text());
    });
  }
}
