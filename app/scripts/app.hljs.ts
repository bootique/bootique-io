import "highlight.js/styles/a11y-light.css";
import hljs from "highlight.js/lib/core";
import * as ClipboardJS from "clipboard/dist/clipboard";

export function applyHighlightJs() {
  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
  hljs.registerLanguage("bash", require('highlight.js/lib/languages/bash'));
  hljs.registerLanguage("markdown", require('highlight.js/lib/languages/markdown'));
  hljs.registerLanguage("gradle", require('highlight.js/lib/languages/gradle'));
  hljs.registerLanguage("groovy", require('highlight.js/lib/languages/groovy'));
  hljs.registerLanguage("java", require('highlight.js/lib/languages/java'));
  hljs.registerLanguage("javascript", require('highlight.js/lib/languages/javascript'));
  hljs.registerLanguage("json", require('highlight.js/lib/languages/json'));
  hljs.registerLanguage("kotlin", require('highlight.js/lib/languages/kotlin'));
  hljs.registerLanguage("sql", require('highlight.js/lib/languages/sql'));
  hljs.registerLanguage("yaml", require('highlight.js/lib/languages/yaml'));
  hljs.configure({
    ignoreUnescapedHTML: true
  });
  hljs.highlightAll();
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
