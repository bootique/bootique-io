export function applyDocsNav() {
  // DOCS NAV (CONTENTS)
  const docsContents = $(".bs-docs-sidebar");
  if (docsContents.length) {
    docsContents.affix({
      offset: {
        top: function () {
          const c = docsContents.offset().top;
          const d = parseInt(docsContents.children("0").css("margin-top"), 10);
          const e = $("#top-nav").height();

          return this.top = c - e - d;
        }
      }
    });
  }
}
