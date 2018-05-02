// Import styles, they will be processed as styles.css
import "../styles/main.scss";

import "jquery";
import "./app.bootstrap";

import {tryApply} from "./tryApply";
import {setupYT} from "./app.playerYT";
import {injectYTplayerAPI} from "./app.injectPlayerYTAPI";
import {applySideMenu} from "./app.sidemenu";
import {applyModernizr} from "./app.modernizr";
import {applyHashLinks} from "./app.hashLinks";
import {feedMeduimPosts} from "./app.mediumPosts";
import {testimonialsSlider} from "./app.slickCarousel";
import {applyPureTables} from "./app.pureTables";
import {applyHighlightJs} from "./app.hljs";

// highlight.js uses own onload listener
tryApply(applyHighlightJs);

$(document).ready(function () {
  tryApply(setupYT);
  tryApply(injectYTplayerAPI);
  tryApply(applyHighlightJs);
  tryApply(applySideMenu);
  tryApply(applyModernizr);
  tryApply(applyHashLinks);
  tryApply(feedMeduimPosts);
  tryApply(testimonialsSlider);
  tryApply(applyPureTables);
});
