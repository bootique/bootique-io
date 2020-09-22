import "highlight.js/styles/a11y-light.css";
import * as hljs from "highlight.js/lib/highlight.js";
import * as xml from "highlight.js/lib/languages/xml.js";
import * as bash from "highlight.js/lib/languages/bash.js";
import * as markdown from "highlight.js/lib/languages/markdown.js";
import * as gradle from "highlight.js/lib/languages/gradle.js";
import * as groovy from "highlight.js/lib/languages/groovy.js";
import * as java from "highlight.js/lib/languages/java.js";
import * as javascript from "highlight.js/lib/languages/javascript.js";
import * as json from "highlight.js/lib/languages/json.js";
import * as kotlin from "highlight.js/lib/languages/kotlin.js";
import * as sql from "highlight.js/lib/languages/sql.js";
import * as yaml from "highlight.js/lib/languages/yaml.js";
import * as ClipboardJS from "clipboard/dist/clipboard";

export function applyHighlightJs() {
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("bash", bash);
  hljs.registerLanguage("markdown", markdown);
  hljs.registerLanguage("gradle", gradle);
  hljs.registerLanguage("groovy", groovy);
  hljs.registerLanguage("java", java);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("kotlin", kotlin);
  hljs.registerLanguage("sql", sql);
  hljs.registerLanguage("yaml", yaml);
  hljs.initHighlightingOnLoad();
}

export function applyCopyHighlightJs() {
  document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    new ClipboardJS('.copy-code-button', {
      target: function(trigger) {
          return trigger.nextElementSibling;
      }
    }).on('success', function(e) {
      e.clearSelection();
      e.trigger.innerText = 'Copied!';
      setTimeout(function () {
        e.trigger.innerText = 'Copy';
      }, 2000);
    });

    var pre = codeBlock.parentNode;
    if ((<Element>pre.parentNode).classList.contains('highlight')) {
        var highlight = pre.parentNode;
        highlight.parentNode.insertBefore(button, highlight);
    } else {
        pre.parentNode.insertBefore(button, pre); 
    }
  });
}