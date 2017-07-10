// Import styles, they will be processed as styles.css
import "../styles/main.scss";

import "jquery";
import "./app.bootstrap";
import "./prettify.js";
import "./tw-widgets";

import {tryApply} from "./tryApply";
import {applySideMenu} from "./app.sidemenu";
import {applyModernizr} from "./app.modernizr";
import {applyGithub} from "./app.github";
import {applyCurrentYear} from "./app.currentYear";
import {applyDocsNav} from "./app.docsNav";
import {applyHashLinks} from "./app.hashLinks";
import {applyPrettyPrint} from "./app.prettyPrint";
import {applyPureTables} from "./app.pureTables";
import {applyDocbookToc} from "./app.docbookToc";

$(document).ready(function () {
  tryApply(applySideMenu);
  tryApply(applyModernizr);
  tryApply(applyGithub);
  tryApply(applyCurrentYear);
  tryApply(applyDocsNav);
  tryApply(applyHashLinks);
  tryApply(applyPrettyPrint);
  tryApply(applyPureTables);
  tryApply(applyDocbookToc);
});
