// Import styles, they will be processed as styles.css
import "../styles/main.scss";

import "jquery";

import {applyHashLinks} from "./app.hashLinks";
import {applyHighlightJs} from "./app.hljs";
import {injectYtPlayerApi} from "./app.injectYtPlayerApi";
import {applyModernizr} from "./app.modernizr";
import {applyPureTables} from "./app.pureTables";
import {setupYt} from "./app.setupYt";
import {applySideMenu} from "./app.sidemenu";
import {testimonialsSlider} from "./app.slickCarousel";
import {tryApply} from "./tryApply";

// highlight.js uses own onload listener
tryApply(applyHighlightJs);

$(document).ready(function () {
  tryApply(setupYt);
  tryApply(injectYtPlayerApi);
  tryApply(applyHighlightJs);
  tryApply(applySideMenu);
  tryApply(applyModernizr);
  tryApply(applyHashLinks);
  tryApply(testimonialsSlider);
  tryApply(applyPureTables);
});
