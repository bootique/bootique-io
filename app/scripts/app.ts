// Import styles, they will be processed as styles.css
import "../styles/main.scss";

import "jquery";

import {tryApply} from "./tryApply";
import {setupYt} from "./app.setupYt";
import {injectYtPlayerApi} from "./app.injectYtPlayerApi";
import {applySideMenu} from "./app.sidemenu";
import {applyModernizr} from "./app.modernizr";
import {applyGithub} from "./app.github";
import {applyHashLinks} from "./app.hashLinks";
import {mediumPosts} from "./app.mediumPosts";
import {testimonialsSlider} from "./app.slickCarousel";
import {applyPureTables} from "./app.pureTables";
import {applyHighlightJs} from "./app.hljs";

$(document).ready(function () {
  tryApply(setupYt);
  tryApply(injectYtPlayerApi);
  tryApply(applyHighlightJs);
  tryApply(applySideMenu);
  tryApply(applyModernizr);
  tryApply(applyGithub);
  tryApply(applyHashLinks);
  tryApply(mediumPosts);
  tryApply(testimonialsSlider);
  tryApply(applyPureTables);
});
