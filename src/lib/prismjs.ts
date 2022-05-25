import { createGlobalStyle } from "styled-components"

export const PrismjsStyles = createGlobalStyle`
  /**
   * a11y-dark theme for JavaScript, CSS, and HTML
   * Based on the okaidia theme: https://github.com/PrismJS/prism/blob/gh-pages/themes/prism-okaidia.css
   * @author ericwbailey
   */

  .highlight {
    position: relative;
    margin-top: 25px;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #263238;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #d4d0ab;
  }

  .token.punctuation {
    color: #fefefe;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ffa07a;
  }

  .token.boolean,
  .token.number {
    color: #00e0e0;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #abe338;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #00e0e0;
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: #ffd700;
  }

  .token.keyword {
    color: #00e0e0;
  }

  .token.regex,
  .token.important {
    color: #ffd700;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  @media screen and (-ms-high-contrast: active) {
    code[class*="language-"],
    pre[class*="language-"] {
      color: windowText;
      background: window;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: window;
    }

    .token.important {
      background: highlight;
      color: window;
      font-weight: normal;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.keyword,
    .token.operator,
    .token.selector {
      font-weight: bold;
    }

    .token.attr-value,
    .token.comment,
    .token.doctype,
    .token.function,
    .token.keyword,
    .token.operator,
    .token.property,
    .token.string {
      color: highlight;
    }

    .token.attr-value,
    .token.url {
      font-weight: normal;
    }
  }

  pre.language-ts code::before {
    background: url(/images/code/ts.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  pre.language-js code::before {
    background: url(/images/code/javascript.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  pre.language-bash code::before {
    background: url(/images/code/terminal.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  pre.language-yaml code::before {
    background: url(/images/code/html.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    content: '';
    border-radius: 0;
    top: -15px;
  }

  pre code::before {
    background: #fff;
    border-radius: 4px;
    color: rgba(0, 0, 0, .7);
    content: attr(data-lang);
    font-size: 12px;
    padding: 2px 8px;
    position: absolute;
    top: -10px;
    right: 10px;
    text-transform: lowercase;
  }
`
