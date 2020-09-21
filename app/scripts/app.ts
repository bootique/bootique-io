// Import styles, they will be processed as styles.css
import "../styles/main.scss";

import "jquery";
import "popper.js"
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/dropdown';

import {tryApply} from "./tryApply";
import {applyHighlightJs, applyCopyHighlightJs} from "./app.hljs";
import {setupYt} from "./app.setupYt";
import {injectYtPlayerApi} from "./app.injectYtPlayerApi";
import {applySideMenu} from "./app.sidemenu";
import {applyModernizr} from "./app.modernizr";
import {testimonialsSlider} from "./app.slickCarousel";
import {initAnchors} from "./app.initAnchors";
import {applyHashLinks} from "./app.hashLinks";

// highlight.js uses own onload listener
tryApply(applyHighlightJs);

$(document).ready(function () {
  tryApply(applyCopyHighlightJs);
  tryApply(setupYt);
  tryApply(injectYtPlayerApi);
  tryApply(applySideMenu);
  tryApply(applyModernizr);
  tryApply(testimonialsSlider);
  tryApply(initAnchors);
  tryApply(applyHashLinks);
});
